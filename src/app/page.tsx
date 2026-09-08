import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TaglineReveal from "@/components/TaglineReveal";
import Reveal from "@/components/Reveal";
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
        <section id="story" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
                Story
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <Story />
              <div id="timeline">
                <Timeline />
              </div>
            </div>
          </div>
        </section>
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
