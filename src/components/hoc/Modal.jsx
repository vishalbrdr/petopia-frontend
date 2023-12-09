import React from "react";
import Portal from "./Portal";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function Modal({ children, heading, onClose }) {
  return (
    <Portal>
      <div
        onClick={onClose}
        className={`overlay fixed top-0 left-0 right-0  bottom-0 bg-black bg-opacity-50`}
      ></div>
      <div
        className="w-1/2 bg-amber-400 max-w-sm  min-w-max px-10 py-6 rounded-lg -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2
        }"
      >
        <header className="mb-4 text-2xl text-center">
          <div className={`h-32 flex -mb-5 justify-center relative`}>
            <Image
              src="/logo.svg"
              alt="petopia-logo"
              fill="true"
              className={`scale-150`}
            />
          </div>
          <h2 className="capitalize font-bold text-center text-amber-900">
            {heading}
          </h2>
          {/* <Link onClick={onClose} href={"/"}>
            <XCircleIcon className="h-6 w-6 text-amber-800 hover:text-red-600" />
          </Link> */}
        </header>
        {children}
      </div>
    </Portal>
  );
}
