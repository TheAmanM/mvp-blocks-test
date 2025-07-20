import CTA3 from "@/components/mvpblocks/cta-3";
import Faq2 from "@/components/mvpblocks/faq-2";
import Feature1 from "@/components/mvpblocks/feature-1";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import Header1 from "@/components/mvpblocks/header-1";
import MinimalHero from "@/components/mvpblocks/minimal-hero";
import { NavbarDemo } from "@/components/mvpblocks/navbar";
import Team1 from "@/components/mvpblocks/team-1";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";

export default function Home() {
  return (
    <>
      {/* <NavbarDemo /> */}
      <Header1 />
      <MinimalHero className="mt-8" />
      <Feature1 />
      {/* <TestimonialsCarousel /> */}
      <Team1 />
      <Faq2 />
      <CTA3 />
      <Footer4Col />
    </>
  );
}
