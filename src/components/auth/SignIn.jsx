import React, { useState } from "react";
import FormGroup from "../FormGroup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    setUser((user) => ({ ...user, [name]: e.target.value }));
  };
  const { signIn, isLoading, currentUser, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user);
  };
  return (
    <form onSubmit={handleSubmit} className="grid gap-4 w-full">
      {error && JSON.stringify(error)}
      {currentUser && currentUser.name}
      <FormGroup
        state={user}
        handleChange={handleChange}
        name={"email"}
        type="email"
      />
      <FormGroup
        state={user}
        handleChange={handleChange}
        name={"password"}
        type="password"
      />
      <button className="text-amber-900 font-medium rounded-lg capitalize px-4 py-2 bg-amber-50  hover:bg-amber-100 transition-all">
        {isLoading ? "loading..." : "submit"}
      </button>
      <p className="text-amber-700">
        Don&apos;t have an account?{" "}
        <Link className="text-amber-900" as="signup" href={"/?q=signup"}>
          Sign Up
        </Link>
        .
      </p>
    </form>
  );
}
