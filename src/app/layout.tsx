import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی دیجی‌کالا",
  description:
    "این وب‌سایت یک نسخه‌ی تمرینی از دیجی‌کالا است که با هدف آموزش و توسعه‌ی مهارت‌های برنامه‌نویسی ایجاد شده است.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
