"use client";
import Link from "next/link";
import Logo from "./Logo";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingIcon from "./LoadingIcon";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser || null);
    });

    return () => unsubscribe();
  }, [auth]);

  const out = () => {
    signOut(auth)
      .then(() => {
        console.log("signed outttttt");
        console.log(auth.currentUser);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="content py-5 flex justify-between items-center top-0 left-0 right-0 absolute z-10">
      <Logo />

      {user === null ? (
        <nav className="flex gap-5 items-center text-lg text-pText">
          <Link href={"/"}>Home</Link>
          <Link href={"#services"}>Services</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"/login"}>Login</Link>
        </nav>
      ) : user ? (
        <nav className="flex gap-5 items-center text-lg text-pText">
          <Link href={"/"}>Home</Link>
          <Link href={"/orders"}>My Orders</Link>
          <button onClick={(e) => out(e)}>Logout</button>
        </nav>
      ) :
        <LoadingIcon/>
    
    }
    </header>
  );
}
