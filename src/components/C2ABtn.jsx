"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const checkLaundry = () => {
    if(user){
        router.push("/orders")
    }else{
        router.push("/login")
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser || null);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <button className="py-2 px-5 text-white rounded-[10px] bg-darkGreen shadow-md duration-200" onClick={()=>checkLaundry()}>
      Check Your Laundry Status
    </button>
  );
}
