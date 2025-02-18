import { serviceType } from "@/data/service";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DigikalaService({ service }: { service: serviceType }) {
  return (
    <Link
      href={service.link}
      className="grid gap-2 rounded-2xl border p-4"
      style={{ gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto 1fr" }}
    >
      {service.image ? (
        <Image
          src={service.image}
          alt={`آیکون ${service.title}`}
          width={"52"}
          height={"52"}
          style={{ gridRow: "1 / 3" }}
        />
      ) : (
        service.element
      )}
      <div className="flex justify-between">
        <h3 className="font-bold text-stone-600">{service.title}</h3>
        <ArrowLeft className="h-6 w-6 text-stone-400" />
      </div>
      {service.description ? (
        <p className="text-sm text-stone-400">{service.description}</p>
      ) : (
        <></>
      )}
    </Link>
  );
}
