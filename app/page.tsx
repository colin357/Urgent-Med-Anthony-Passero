import Approach from "@/components/Approach";
import CallBar from "@/components/CallBar";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Patients from "@/components/Patients";
import Process from "@/components/Process";
import RevealProvider from "@/components/Reveal";
import Stats from "@/components/Stats";
import Testing from "@/components/Testing";
import Treatment from "@/components/Treatment";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Approach />
        <Testing />
        <Treatment />
        <Patients />
        <Process />
        <Founder />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallBar />
      <RevealProvider />
    </>
  );
}
