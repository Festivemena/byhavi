import Image from "next/image";
import LandingHero from "./components/LandingHero";
import Deploy from "./components/Deploy";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <LandingHero/>
      <Deploy/>
      <Features/>
      <WhyUs/>
      <Footer/>
    </>
  );
}
