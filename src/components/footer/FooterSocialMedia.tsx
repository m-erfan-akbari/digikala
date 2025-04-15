import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Aparat from "../Icon/Aparat";
import Link from "next/link";

export const socialMedias = [
  { logo: FaInstagram, url: "/" },
  { logo: FaTwitter, url: "/" },
  { logo: FaLinkedin, url: "/" },
  { logo: Aparat, url: "/" },
];

export default function FooterSocialMedia() {
  return socialMedias.map((sc, index) => (
    <Link key={index} href={sc.url}>
      {<sc.logo className="h-8 w-8 text-stone-400" />}
    </Link>
  ));
}
