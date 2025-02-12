import React from "react";
import MainHeader from "../../components/header/MainHeader";

type PropsType = {
  children: React.ReactNode;
};

export default function layout({ children }: PropsType) {
  return (
    <>
      <MainHeader />
      <main className="flex flex-col gap-y-4">{children}</main>
    </>
  );
}
