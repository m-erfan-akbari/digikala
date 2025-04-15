import FooterAboutUs from "./FooterAboutUs";
import FooterCopyright from "./FooterCopyright";
import FooterDigiBrands from "./FooterDigiBrands";
import FooterLinks from "./FooterLinks";
import FooterServiceFeature from "./FooterServiceFeature";
import FooterTopSection from "./FooterTopSection";

export default function MainFooter() {
  return (
    <footer className="border-t">
      <div
        className="mx-auto flex flex-col gap-8 py-8"
        style={{ maxWidth: "1676px" }}
      >
        <FooterTopSection />
        <FooterServiceFeature />
        <FooterLinks />
        <hr />
        <FooterAboutUs />
        <hr />
        <FooterCopyright />
      </div>

      <FooterDigiBrands />
    </footer>
  );
}
