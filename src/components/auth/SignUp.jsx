import React, { useState } from "react";
import FormGroup from "../FormGroup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    setUser((user) => ({ ...user, [name]: e.target.value }));
  };

  const { signUp, isLoading, currentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 w-full">
      {currentUser && currentUser.name}
      <FormGroup name={"name"} state={user} handleChange={handleChange} />
      <FormGroup
        name={"email"}
        type="email"
        state={user}
        handleChange={handleChange}
      />
      <FormGroup
        name={"password"}
        state={user}
        handleChange={handleChange}
        type="password"
      />
      <button className="text-amber-900 font-medium rounded-lg capitalize px-4 py-2 bg-amber-50  hover:bg-amber-100 transition-all">
        {isLoading ? "loading..." : "submit"}
      </button>
      <p className="text-amber-700">
        Already have an account?{" "}
        <Link className="text-amber-900" as="signin" href={"/?q=signin"}>
          Sign In
        </Link>
        .
      </p>
    </form>
  );
}
