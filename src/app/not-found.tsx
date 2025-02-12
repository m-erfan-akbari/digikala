import Image from "next/image";
import MainHeader from "../components/header/MainHeader";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <MainHeader />
      <main>
        <section
          className="container relative flex flex-col items-center gap-3 pt-8"
          style={{ height: "80dvh" }}
        >
          <h2 className="text-lg font-semibold text-stone-800">
            صفحه‌ای که دنبال آن بودید پیدا نشد!
          </h2>
          <Link href="/" className="flex items-center text-cyan-500">
            <h3>صفحه اصلی</h3>
            <ChevronLeft className="h-4 w-4" />
          </Link>
          <div className="relative h-1/3 w-4/6">
            <Image
              src="https://www.digikala.com/statics/img/png/page-not-found.webp"
              alt="تصویر صفحه یافت نشده"
              fill
              objectFit="contain"
            />
          </div>
        </section>
      </main>
    </>
  );
}
