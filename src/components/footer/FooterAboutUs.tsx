"use client";

import { useState } from "react";
import styles from "./FooterAboutUs.module.css";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import FooterAboutUsContent from "./FooterAboutUsContent";

export default function FooterAboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2" style={{ maxWidth: "60vw" }}>
      <h5 className="text-2xl text-stone-700">
        دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران
      </h5>
      <p
        className={cn(
          "text-sm leading-6 text-stone-500",
          !isOpen && styles.gradient_mask,
        )}
      >
        دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل
        شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران،
        شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها
        گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با
        خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای،
        استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با
        سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین
        در ایران محسوب می‌شود.
      </p>

      {isOpen && <FooterAboutUsContent />}

      <button
        className="flex w-fit items-center gap-1 text-sm text-cyan-500"
        onClick={() => setIsOpen((s) => !s)}
      >
        {isOpen ? "بستن" : "مشاهده بیشتر"} <ChevronLeft className="h-4 w-4" />
      </button>
    </div>
  );
}
