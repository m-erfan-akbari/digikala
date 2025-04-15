import FooterEmailForm from "./FooterEmailForm";
import FooterSocialMedia from "./FooterSocialMedia";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-lg font-medium">همراه ما باشید!</p>

      <div className="flex gap-8">
        <FooterSocialMedia />
      </div>

      <p className="text-lg font-medium">
        با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
      </p>

      <FooterEmailForm />
    </div>
  );
}
