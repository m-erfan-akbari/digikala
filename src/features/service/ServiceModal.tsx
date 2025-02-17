"use client";

import Modal from "@/components/ui/Modal";
import {
  digikalaGroupServices,
  offerServices,
  serviceType,
} from "@/data/service";
import { ArrowLeft, Ellipsis } from "lucide-react";
import OfferService from "./OfferService";
import Image from "next/image";
import Link from "next/link";

const moreService: serviceType = {
  title: "بیشتر",
  link: "#",
  element: (
    <span
      className="flex items-center justify-center rounded-full bg-stone-200 text-stone-500"
      style={{ width: "52px", height: "52px" }}
    >
      <Ellipsis />
    </span>
  ),
};

export default function ServiceModal() {
  return (
    <div className="h-[250vh]">
      <Modal>
        <Modal.Trigger id="test">
          <OfferService service={moreService} />
        </Modal.Trigger>

        <Modal.Container
          id="test"
          className="max-h-[45rem] w-[55rem] max-w-full overflow-hidden"
        >
          <Modal.Header>
            <Modal.Title>خدمات دیجی‌کالا</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>

          <Modal.Body className="flex flex-col gap-6 overflow-auto p-8">
            <div className="flex flex-wrap gap-16">
              {offerServices.map((service, index) => (
                <OfferService key={index} service={service} />
              ))}
            </div>

            <div>
              <h2 className="mb-4 gap-2 text-stone-500">
                سرویس‌های گروه دیجی‌کالا
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {digikalaGroupServices.map((service, index) => (
                  <DigikalaService key={index} service={service} />
                ))}
              </div>
            </div>
          </Modal.Body>
        </Modal.Container>
      </Modal>
    </div>
  );
}

function DigikalaService({ service }: { service: serviceType }) {
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
