"use client";
import LoadingIcon from "@/components/LoadingIcon";
import { useEffect, useState, useTransition } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  RecaptchaVerifier,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidLength, setValidLength] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [resendCountdown, setResendCountdown] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [confirmationResult, setconfirmationResult] = useState(null);
  const [otp, setOtp] = useState("");

  const requestOtp = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    setResendCountdown(60);
    setError("");
    startTransition(async () => {
      if (!recaptchaVerifier) {
        return setError("RecaptchaVerifier is not initialized.");
      }

      try {
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          "+" + phoneNumber,
          recaptchaVerifier
        );
        setconfirmationResult(confirmationResult);
        setSuccess("OTP sent successfully.");
      } catch (error) {
        console.log(error);
        setSuccess("");
        setResendCountdown(0);
        if (error.code === "auth/invalid-phone-number") {
          setError("Invalid phone number. please check the number entered");
        } else if (error.code === "auth/too-many-requests") {
          setError("too many requests. please try again later");
        } else {
          setError("failed to send OTP. Please try again");
        }
      }
    });
  };

  const verifyOtp = async () => {
    console.log("phoneNumber");
    setError("");
    startTransition(async () => {
      if (!confirmationResult) {
        setError("please request OTP first");
        return;
      }
      await confirmationResult
        .confirm(otp)
        .then((res) => {
          console.log("hereee");
          console.log(res);
          router.replace("/orders");
          console.log(auth);
        })
        .catch((error) => {
          console.log(error);
          setSuccess("");
          setError("Failed to verify OTP. please check the OTP");
        });
    });
  };

  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  useEffect(() => {
    if (phoneNumber.length < 11) {
      setValidLength(false);
    } else {
      setValidLength(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    setRecaptchaVerifier(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, [auth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser || null);

      if (loggedInUser) {
        router.push("/orders");
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // submiting otp when the last digit is entered
  useEffect(() => {
    const hasEnteredAllDigits = otp.length === 6;
    if (hasEnteredAllDigits) {
      verifyOtp().then(addUser());
    }
  }, [otp]);

  // API calls
  const addUser = async () => {
    console.log("starteddd");
    console.log(phoneNumber);
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: phoneNumber }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1>Login</h1>
        <div id="recaptcha-container"></div>

        {/* phone number input */}
        {!confirmationResult && (
          <form onSubmit={requestOtp}>
            <PhoneInput
              country={"kw"}
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </form>
        )}

        {/* OTP input */}
        {confirmationResult && (
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}

        <button
          disabled={isPending || resendCountdown > 0 || !isValidLength}
          onClick={(e) => requestOtp(e)}
          className={`w-full py-2 px-5 flex justify-center items-center gap-3 rounded-[10px] text-white duration-200 ${
            !isValidLength || isPending || resendCountdown > 0
              ? "bg-[#8EC7AB] cursor-auto"
              : "bg-darkGreen cursor-pointer hover:text-black"
          }`}
        >
          {isPending ? (
            <>
              Sending OTP <LoadingIcon />
            </>
          ) : resendCountdown > 0 ? (
            `Resend OTP in ${resendCountdown}`
          ) : (
            "Send OTP"
          )}
        </button>

        {error && (
          <div className="py-2 px-5 rounded-[10px] bg-[#ff080060] border-[1px] border-red">
            <p className="text-white font-semibold text-sm">{error}</p>
          </div>
        )}
        {success && (
          <div className="py-2 px-5 rounded-[10px] bg-[#37eb0044] border-[1px] border-[#7de45e]">
            <p className="text-white font-semibold text-sm">{success}</p>
          </div>
        )}
      </div>
    </main>
  );
}
