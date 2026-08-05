"use client";

import Image from "next/image";
import { useState, memo } from "react";

import Testimonial from "./Testimonial";

import { testimonials } from "@/constants";

const Testimonials = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const testimonialsLength = testimonials.length;

  const handleButtonClick = () => {
    if (visibleIndex < testimonialsLength - 1) {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    } else {
      setVisibleIndex(0);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center md:mt-20 mt-14 mb-12 px-4">
        <p className="font-bold text-center text-[#0C102E] text-[2rem]">
          Testimonials from our Satisfied Clients
        </p>
      </div>

      <div className="w-full md:flex hidden items-center justify-center mb-20">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            id={testimonial.id}
            key={testimonial.id}
            content={testimonial.content}
            name={testimonial.name}
            rating={testimonial.rating}
            job={testimonial.job}
            avatar={testimonial.avatar}
            isVisible={index === visibleIndex}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>

      <div className="md:hidden block px-4 mb-14">
        {testimonials.map((testimonial) => (
          <div
            className="mb-4 p-7 bg-[#ffffff] border-1,5 rounded-2xl border-gray-300 drop-shadow-md"
            key={testimonial.id}
          >
            <div>
              <img
                src={testimonial.avatar}
                width={80}
                height={80}
                alt=""
                className="object-cover rounded-[80px] h-[80px] w-[80px]"
              />
            </div>

            <p className="text-sm mt-6  font-bold text-[#000000]">
              {testimonial.name}
            </p>

            <p className="text-sm my-2 text-gray-400">{testimonial.job}</p>

            <p className="text-sm text-[#000000]">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(Testimonials);
