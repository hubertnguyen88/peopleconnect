import Hero from "./components/Hero";
import Service from "./components/Service";
import Highlights from "./components/Highlights";
import FAQs from "@/sub-page-components/FAQs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import { servicesLeads } from "../../constants";
import { dataQuestionsLeads } from "../../constants";
import GoogleRecaptchaWrapper from "@/components/GoogleRecaptchaWrapper";
import ContactForm from "@/sub-page-components/ContactForm";

export default function FeatLeads() {
  return (
    <GoogleRecaptchaWrapper>
      <main>
        <Hero />
        <div className="w-full text-center lg:py-32 lg:px-72 md:px-48 py-8 px-4 lg:bg-[#FFFFFF] bg-[#FDFCFA]">
          <p className="text-[#0C102E] lg:text-[30px] text-2xl font-bold lg:leading-[42px] leading-normal">
            Discover a platform that not only grants you access to a vast
            network of 15 million B2B professionals but also equips you with a
            mini CRM for streamlined lead management and robust email marketing
            capabilities.
          </p>
        </div>
        <Highlights />
        <Service
          title="Benefits"
          data={servicesLeads}
          img="/images/service_leads.png"
        />
        <FAQs
          title="How It Works"
          data={dataQuestionsLeads}
          img="/images/question_leads.png"
        />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </GoogleRecaptchaWrapper>
  );
}
