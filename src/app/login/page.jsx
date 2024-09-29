"use client";
import LoadingIcon from "@/components/LoadingIcon";
import { useEffect, useState, useTransition } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidLength, setValidLength] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [resendCountdown, setResendCountdown] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  useEffect(() => {
    console.log(phoneNumber);
    if (phoneNumber.length < 11) {
      setValidLength(false);
    } else {
      setValidLength(true);
    }
  }, [phoneNumber]);

  return (
    <main className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1>Login</h1>
        <div id="recaptcha-container"></div>

        <form>
          <PhoneInput
            country={"kw"}
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </form>

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
            `resend OTP in ${resendCountdown}`
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
