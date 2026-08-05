import Hero from "../../app/visa-immigration/components/Hero";
import "@/app/global-talent/components/index.css";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

import Highlights from "./components/Highlights";
import Service from "@/sub-page-components/Service";
import FAQs from "@/sub-page-components/FAQs";

import { dataQuestionsVisa } from "../../constants";
import { servicesOfferedVisa } from "../../constants";
import GoogleRecaptchaWrapper from "@/components/GoogleRecaptchaWrapper";
import ContactForm from "@/sub-page-components/ContactForm";

export default function VisaImmigration() {
  return (
    <GoogleRecaptchaWrapper>
      <main className="bg-[#FFFFFF]">
        <Hero />
        <div className="w-full text-center lg:py-32 lg:px-72 md:px-48 py-8 px-4 lg:bg-[#FFFFFF] bg-[#FDFCFA]">
          <p className="text-[#0C102E] lg:text-4xl text-2xl font-bold lg:leading-[42px] leading-normal">
            As a trusted partner to multinational corporations, we streamline
            the immigration process for your foreign employees, ensuring
            compliance, efficiency, and a smooth relocation experience.
          </p>
        </div>
        <Highlights />
        <Service
          title="Services Offered"
          data={servicesOfferedVisa}
          img="/images/service_visa.png"
        />
        <FAQs
          title="How It Works"
          data={dataQuestionsVisa}
          img="/images/question_visa.png"
        />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </GoogleRecaptchaWrapper>
  );
}
