import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partnerships } from "@/components/Partnerships";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Team />
        <Partnerships />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
