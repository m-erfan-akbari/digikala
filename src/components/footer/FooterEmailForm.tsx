"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { validateEmail } from "@/lib/email";

export default function FooterEmailForm() {
  const [email, setEmail] = useState("");
  const isEmailValid = validateEmail(email);

  return (
    <div>
      <form className="flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ایمیل شما"
          className="flex-1 rounded-lg bg-stone-200 px-2 text-sm text-stone-700"
        />

        <Button disabled={!isEmailValid}>ثبت</Button>
      </form>

      <p className="my-1 text-xs text-red-500">
        {email && !isEmailValid ? "پست الکترونیک وارد شده درست نیست" : " "}
      </p>
    </div>
  );
}
