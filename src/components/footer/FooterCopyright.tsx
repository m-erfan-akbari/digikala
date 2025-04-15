import Link from "next/link";

export default function FooterCopyright() {
  return (
    <p className="text-center text-sm text-stone-500">
      این وب‌سایت یک نسخه‌ی تمرینی از دیجی‌کالا است که با هدف آموزش و توسعه‌ی
      مهارت‌های برنامه‌نویسی ایجاد شده است. تمام حقوق اين وب‌سايت نیز برای شرکت
      نوآوران فن آوازه{" ("}
      <Link
        href={"https://digikala.com"}
        target="_blank"
        className="text-red-500"
      >
        فروشگاه آنلاین دیجی‌کالا
      </Link>
      {") "}
      است.
    </p>
  );
}
