"use client";

import Modal from "@/components/ui/Modal";
import {
  digikalaGroupServices,
  offerServices,
  serviceType,
} from "@/data/service";
import { Ellipsis } from "lucide-react";
import OfferService from "./OfferService";
import DigikalaService from "./DigikalaService";

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
    <Modal>
      <Modal.Trigger id="digikala-services">
        <OfferService service={moreService} />
      </Modal.Trigger>

      <Modal.Container
        id="digikala-services"
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
  );
}
