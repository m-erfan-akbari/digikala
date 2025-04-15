import Image from "next/image";
import { serviceFeatures } from "./data";
import Link from "next/link";

export default function FooterServiceFeature() {
  return (
    <div className="flex justify-around">
      {serviceFeatures.map((feature) => (
        <Link
          key={feature.image}
          href={feature.url}
          className="flex flex-col items-center"
        >
          <Image
            width={56}
            height={56}
            src={feature.image}
            alt={`آیکون ${feature.title}`}
          />
          <p className="text-xs text-stone-700">{feature.title}</p>
        </Link>
      ))}
    </div>
  );
}
