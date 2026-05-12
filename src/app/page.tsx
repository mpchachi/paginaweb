import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Cta } from "@/components/cta";
import { Demo } from "@/components/demo";
import { Partners } from "@/components/partners";
import { Team } from "@/components/team";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Journey />
        <Cta />
        <Demo />
        <Partners />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
