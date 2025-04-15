"use client";

import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from "react";

type VariantType = "primary" | "outline" | "light";

type CommonProps = {
  as?: ElementType;
  variant?: VariantType;
  disabled?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps;

const baseStyles = "py-2 px-4 rounded-lg";
const variants = {
  primary: "bg-red-500 text-white",
  outline: "bg-transparent border",
  light: "bg-stone-300 text-stone-800",
};

function BaseButton({
  as: Component = "button",
  variant = "primary",
  className,
  children,
  disabled = false,
  ...props
}: CommonProps & (ButtonProps | AnchorProps)) {
  return (
    <Component
      className={cn(
        baseStyles,
        variants[variant],
        disabled && "bg-stone-300 text-stone-500",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
}

function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}

function Login(props: AnchorProps) {
  return <BaseButton as={LoginLink} {...props} />;
}

Button.Login = Login;
export default Button;
