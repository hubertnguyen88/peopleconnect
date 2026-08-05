import Hero from "../../app/global-talent/components/Hero";
import Service from "@/sub-page-components/Service";
import "@/app/global-talent/components/index.css";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Highlights from "./components/Highlights";
import FAQs from "@/sub-page-components/FAQs";
import ContactForm from "@/sub-page-components/ContactForm";

import { dataQuestions } from "../../constants";
import { servicesOffered } from "../../constants";
import GoogleRecaptchaWrapper from "@/components/GoogleRecaptchaWrapper";

export default function GlobalTalent() {
  return (
    <GoogleRecaptchaWrapper>
      <main className="bg-[#FFFFFF]">
        <Hero />
        <div className="w-full text-center lg:py-32 lg:px-72 md:px-48 py-8 px-4 lg:bg-[#FFFFFF] bg-[#FDFCFA]">
          <p className="text-[#0C102E] lg:text-4xl text-2xl font-bold lg:leading-[42px] leading-normal">
            As a leader in headhunting and recruitment services, we connect you
            with top-tier talent from around the world, ensuring your team is
            composed of the best in the industry.
          </p>
        </div>
        <Highlights />
        <Service
          title="Services Offered"
          data={servicesOffered}
          img="/images/service_Offered.png"
        />
        <FAQs
          title="How It Works"
          data={dataQuestions}
          img="/images/data_question.png"
        />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </GoogleRecaptchaWrapper>
  );
}
