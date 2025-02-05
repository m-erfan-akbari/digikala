"use client";

import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from "react";

type VariantType = "primary" | "outline";

type CommonProps = {
  as?: ElementType;
  variant?: VariantType;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps;

const baseStyles = "py-2 px-4 rounded-lg";
const variants = {
  primary: "",
  outline: "bg-transparent border",
};

function BaseButton({
  as: Component = "button",
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & (ButtonProps | AnchorProps)) {
  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
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
