import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "./hoc/Modal";
import SignUp from "./SignUp";
import { useRouter } from "next/router";
import SignIn from "./SignIn";

export default function Navbar() {
  const router = useRouter();
  const { q } = router.query;

  function onAuthModalClose() {
    router.push("/");
  }

  return (
    <header className="bg-amber-400 px-10 flex gap-10 items-center">
      <Link href="/">
        <div className={`h-24 w-24 relative`}>
          <Image
            src="/logo.svg"
            alt="petopia-logo"
            fill="true"
            className={`scale-150`}
          />
        </div>
      </Link>
      <div
        className="flex relative gap-1 px-3 align-middle bg-amber-100 py-2 rounded-md
           focus-within:bg-amber-50 items-center"
      >
        <AiOutlineSearch className={`text-gray-600`} />
        <input
          type="text"
          placeholder="Search pets"
          className=" outline-none
          text-amber-600
          focus-within:bg-amber-50 bg-amber-100
           placeholder:text-gray-600"
        />
        <ul className="absolute top-full invisible peer-focus:visible bg-amber-50 rounded-md left-0 border w-full mt-1">
          <li className="p-2">dogs</li>
        </ul>
      </div>
      <nav className="ml-auto">
        <ul className="flex gap-10">
          <li>
            <Link
              className="text-amber-900 hover:text-amber-700"
              href={"/myFavorites"}
            >
              My Favorites
            </Link>
          </li>
          <li>
            <Link
              className="text-amber-900 rounded-lg px-4 py-2 bg-amber-100  hover:bg-amber-50 transition-all"
              href={"/?q=signin"}
              as={"/signin"}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
      {q === "signup" && (
        <Modal heading="Create new account" onClose={onAuthModalClose}>
          <SignUp />
        </Modal>
      )}
      {q === "signin" && (
        <Modal heading="LogIn to your account" onClose={onAuthModalClose}>
          <SignIn />
        </Modal>
      )}
    </header>
  );
}
