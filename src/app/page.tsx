import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SocialNetworks from "@/components/SocialNetworks";
import Career from "@/components/Career";
import Blog from "@/components/Blog";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SocialNetworks />
        <Career />
        <Blog />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
