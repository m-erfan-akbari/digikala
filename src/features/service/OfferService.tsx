import { serviceType } from "@/data/service";
import Image from "next/image";
import Link from "next/link";

export default function OfferService({ service }: { service: serviceType }) {
  return (
    <Link href={service.link} scroll={false}>
      <div className="flex flex-col gap-2">
        {service?.image ? (
          <Image
            src={service.image}
            alt={`آیکون ${service.title}`}
            width={52}
            height={52}
          />
        ) : (
          service.element
        )}
        <h6 className="max-w-12 text-center text-xs font-semibold text-stone-500">
          {service.title}
        </h6>
      </div>
    </Link>
  );
}
