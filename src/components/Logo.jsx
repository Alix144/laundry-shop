"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/")
  };

  return (
      <div className="w-52 cursor-pointer" onClick={navigateToHome}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={500}
          height={300}
          priority
        />
      </div>
  );
}
