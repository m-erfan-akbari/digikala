import { ReactNode } from "react";

type ImageOnly = {
  image: string;
  element?: never; // Ensure `element` is not allowed
};

type ElementOnly = {
  image?: never; // Ensure `image` is not allowed
  element: ReactNode;
};

type ImageOrElement = ImageOnly | ElementOnly;

export type serviceType = ImageOrElement & {
  title: string;
  link: string;
  description?: string;
};

export const homepageServices: serviceType[] = [
  {
    title: "شانس ۱۰۰ میلیونی",
    image: "/service/100mill-chance.png",
    link: "#",
  },
  { title: "شانس ۵ برابر", image: "/service/5x-chance.png", link: "#" },
  {
    title: "سوپرمارکت دیجی‌کالا",
    image: "/service/supermaret-digikala.png",
    link: "#",
  },
  {
    title: "تخفیف موبایل‌کارکرده",
    image: "/service/secondhand-mobile-discount.png",
    link: "#",
  },
  {
    title: "خرید طلای دیجیتال",
    image: "/service/digital-gold.png",
    link: "#",
  },
  {
    title: "4 قسطه",
    image: "/service/4installment.png",
    link: "#",
  },
  {
    title: "70٪ تخفیف پلاس",
    image: "/service/digiplus-discount.png",
    link: "#",
  },
  {
    title: "کدتخفیف فروشندگان",
    image: "/service/seller-discount.png",
    link: "#",
  },
  { title: "خرید چکی", image: "/service/bankcheck-buy.png", link: "#" },
];

export const offerServices: serviceType[] = [
  {
    title: "شانس ۱۰۰ میلیونی",
    image: "/service/100mill-chance.png",
    link: "#",
  },
  { title: "شانس ۵ برابر", image: "/service/5x-chance.png", link: "#" },
  {
    title: "تخفیف موبایل‌کارکرده",
    image: "/service/secondhand-mobile-discount.png",
    link: "#",
  },
  {
    title: "کدتخفیف فروشندگان",
    image: "/service/seller-discount.png",
    link: "#",
  },
  { title: "خرید چکی", image: "/service/bankcheck-buy.png", link: "#" },
  { title: "کارت هدیه", image: "/service/gift-card.png", link: "#" },
  {
    title: "تبلیغات فروشندگان",
    image: "/service/seller-advertisement.png",
    link: "#",
  },
  { title: "دیجی‌کلاب", image: "/service/digiclub.png", link: "#" },
  { title: "فروشنده شوید", image: "/service/be-seller.png", link: "#" },
];

export const digikalaGroupServices: serviceType[] = [
  {
    title: "سوپرمارکت دیجی‌کالا",
    description: "سوپرمارکت دیجی‌کالا",
    image: "/service/supermaret-digikala.png",
    link: "#",
  },
  {
    title: "خرید طلای دیجیتال",
    image: "/service/digital-gold.png",
    link: "#",
  },
  {
    title: "4 قسطه",
    description: "خرید قسطی گوشی موبایل، لپ‌تاپ،‌ طلا و لوزام خانگی",
    image: "/service/4installment.png",
    link: "#",
  },
  {
    title: "70٪ تخفیف پلاس",
    image: "/service/digiplus-discount.png",
    link: "#",
  },
  {
    title: "تخفیف بومی‌محلی",
    image: "/service/local-discount.png",
    link: "#",
  },
  {
    title: "دیجی‌کالا سرویس",
    description: "گارانتی و خدمات پس از فروش دیجی‌کالا",
    image: "/service/digikala-service.png",
    link: "#",
  },
  {
    title: "فروشگاه حضوری",
    image: "/service/physical-store.png",
    link: "#",
  },
  {
    title: "دیجی‌‌استایل",
    description:
      "فروشگاه آنلاین کالاهای مد و پوشاک،‌ لوازم ورزشی،‌ سفر و کمپینگ",
    image: "/service/digistyles.jpg",
    link: "#",
  },
  {
    title: "دیجی‌کالا بیزینس",
    description: "خرید عمده و سازمانی انواع کالا",
    image: "/service/digikala-business.png",
    link: "#",
  },
  {
    title: "دیجی‌کالا مهر",
    description: "به مسیر تازه مهربانی بیا",
    image: "/service/digikala-happiness.png",
    link: "#",
  },
  {
    title: "پیندو",
    description: "ثبت آگهی برای کالا و خدمات",
    image: "/service/pindo.png",
    link: "#",
  },
  {
    title: "فیدیبو",
    description: "خرید کتاب و دانلود کتاب الکترونیک",
    image: "/service/fidibo.png",
    link: "#",
  },
];
