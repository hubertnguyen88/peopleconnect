import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FirstIntro from "@/components/Introductions/FirstIntro";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <Hero />

      <Services />

      <FirstIntro />

      <Testimonials />

      <Footer />
    </main>
  );
}
