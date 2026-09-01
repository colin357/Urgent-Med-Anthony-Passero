import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marquee from "@/components/Marquee";
import RevealProvider from "@/components/Reveal";
import WhyEarly from "@/components/WhyEarly";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyEarly />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <RevealProvider />
    </>
  );
}
