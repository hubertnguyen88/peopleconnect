import { memo } from "react";
import { services } from "@/constants";

import Service from "../Service";

const Services = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-[2rem] pb-11 text-[#0C102E]">
        Our Services
      </h1>
      <div className="xl:px-60 px-4 md:px-24 xl:pb-24 pb-16">
        <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service) => (
            <Service
              key={service.id}
              image={service.image}
              title={service.title}
              content={service.content}
              src={service.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Services);
