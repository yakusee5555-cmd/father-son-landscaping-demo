import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Lawn Mowing",
  "Edging",
  "Fertilization",
  "Aeration",
  "Yard Cleanup",
  "Mulch & Beds",
  "Staten Island",
  "New Dorp",
  "Tottenville",
  "Dongan Hills",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="Father and Son Landscaping | Lawn Mowing & Care in Staten Island, NY"
        description="Father and Son Landscaping — mowing, edging, fertilization, and cleanups across Staten Island, NY. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
