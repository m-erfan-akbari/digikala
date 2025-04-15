import MainFooter from "@/components/footer/MainFooter";
import MainHeader from "../../components/header/MainHeader";

type PropsType = {
  children: React.ReactNode;
};

export default function layout({ children }: PropsType) {
  return (
    <>
      <MainHeader />

      <main className="flex flex-col gap-y-4 pb-16 lg:pb-4">{children}</main>

      <MainFooter />
    </>
  );
}
