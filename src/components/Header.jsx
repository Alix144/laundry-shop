import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {

  return (
    <header className="content py-5 flex justify-between items-center top-0 left-0 right-0 absolute z-10">
      <Logo/>

      <nav className="flex gap-5 items-center text-lg">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/login"}>Login</Link>
      </nav>
    </header>
  );
}
