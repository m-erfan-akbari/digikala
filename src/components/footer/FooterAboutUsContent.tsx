import { Fragment } from "react";
import { aboutUs } from "./data";

export default function FooterAboutUsContent() {
  return aboutUs.map((section, index) => (
    <Fragment key={index}>
      <h5 className="text-lg font-medium text-stone-500">{section.title}</h5>
      <p className="text-sm leading-6 text-stone-500">{section.description}</p>
    </Fragment>
  ));
}
