"use client";

import { login } from "@/app/lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {

  return (
    <form  >
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;