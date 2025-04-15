import Link from "next/link";
import { footerLinks } from "./data";
import FooterContact from "./FooterContact";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {footerLinks.map((ftlink, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h6 className="text-lg font-medium">{ftlink.title}</h6>

          {ftlink.links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-sm text-stone-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      ))}

      <FooterContact />
    </div>
  );
}
