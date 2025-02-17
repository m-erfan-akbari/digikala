import { homepageServices } from "@/data/service";
import OfferService from "./OfferService";
import ServiceModal from "./ServiceModal";

export default function Services() {
  return (
    <section className="container flex justify-between py-2">
      {homepageServices.map((service, index) => (
        <OfferService key={index} service={service} />
      ))}

      <ServiceModal />
    </section>
  );
}
