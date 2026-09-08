import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TaglineReveal from "@/components/TaglineReveal";
import Story from "@/components/Story";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Toolkit from "@/components/Toolkit";
import Achievements from "@/components/Achievements";
import Products from "@/components/Products";
import Hobbies from "@/components/Hobbies";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TaglineReveal />
        <Story />
        <Timeline />
        <Skills />
        <Toolkit />
        <Achievements />
        <Products />
        <Hobbies />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
