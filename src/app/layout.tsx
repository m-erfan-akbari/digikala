import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../components/provider/AuthProvider";
import { vazir } from "./font/font";

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
        className={`${vazir.className} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
