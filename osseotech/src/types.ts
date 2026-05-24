export interface ProductItem {
  id: string;
  title: string;
  description: string;
  detailedSpecs: string[];
  clinicalIndication: string;
  materialComposition: string;
}

export interface Hotspot {
  id: string;
  title: string;
  label: string;
  description: string;
  position: { top: string; left: string };
  alignment: "left" | "right" | "top" | "bottom";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  practiceName: string;
  specialty: string;
  implantOfInterest: string;
  preferredDate: string;
  message: string;
}
