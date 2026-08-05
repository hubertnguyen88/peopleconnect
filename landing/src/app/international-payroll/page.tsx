import Hero from "../international-payroll/components/Hero";
import Highlights from "./components/Highlights";
import Service from "@/sub-page-components/Service";
import Footer from "@/components/Footer";
import FAQs from "@/sub-page-components/FAQs";
import Testimonials from "@/components/Testimonials";

import { servicesOfferedPayrolls } from "../../constants";
import { dataQuestionPayrolls } from "../../constants";
import GoogleRecaptchaWrapper from "@/components/GoogleRecaptchaWrapper";
import ContactForm from "@/sub-page-components/ContactForm";

export default function InternationalPayroll() {
  return (
    <GoogleRecaptchaWrapper>
      <main>
        <Hero />
        <div className="w-full text-center lg:py-32 lg:px-72 md:px-48 py-8 px-4 lg:bg-[#FFFFFF] bg-[#FDFCFA]">
          <p className="text-[#0C102E] lg:text-4xl text-2xl font-bold lg:leading-[46px] leading-normal">
            As a trusted partner to multinational corporations, we streamline
            the complexities of managing payroll for your foreign employees,
            ensuring accuracy, compliance, and financial efficiency.
          </p>
        </div>
        <Highlights />
        <Service
          title="Services Offered"
          data={servicesOfferedPayrolls}
          img="/images/service_payroll.png"
        />
        <FAQs
          title="How It Works"
          data={dataQuestionPayrolls}
          img="/images/question_payroll.png"
        />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </GoogleRecaptchaWrapper>
  );
}
