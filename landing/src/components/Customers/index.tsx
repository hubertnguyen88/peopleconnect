import { memo } from "react";
import { loyalCustomers } from "@/constants/customers";

import Customer from "./Customer";

const Customers = () => {
  return (
    <div className="xl:my-24 my-16">
      <h1 className="text-center font-semibold text-[2rem] pb-11 text-[#0C102E]">
        Loyal customers
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-4 lg:gap-x-[5rem] grid-cols-2 md:gap-x-[3rem] gap-x-[3rem] gap-y-[2rem]">
          {loyalCustomers.map((customer) => (
            <Customer
              Avatar={customer.Avatar}
              key={customer.id}
              id={customer.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Customers);
