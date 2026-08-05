import { memo } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface TestimonialsProps {
  id: number;
  avatar: string;
  rating: number;
  content: string;
  name: string;
  job?: string;
  isVisible: boolean;
  onButtonClick: () => void;
}

const Testimonial = (props: TestimonialsProps) => {
  return (
    <div
      className={`xl:w-3/5 w-5/6 flex items-center justify-center ${
        props.isVisible ? "" : "hidden"
      }`}
    >
      <img
        src={props.avatar}
        width={150}
        height={150}
        alt=""
        className="mr-[-75px] z-10 rounded-[150px] h-[150px] w-[150px]"
      />
      <div className="flex h-60" key={props.id}>
        <div className="bg-[#ffffff] border-[1px] border-[#0xE1E0E3] rounded-full ">
          <p className="text-black text-xs pt-16 pl-32 pr-16">
            {props.content}
          </p>
          <p className="text-black text-[13px] pt-4 font-bold pl-32 pr-12">
            {props.name}
          </p>
          <p className="text-black text-[13px] pt-1 pl-32 pr-12 text-gray-400">
            {props.job}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          props.onButtonClick();
        }}
        className="p-[1rem] ml-[-32px] rounded-full"
        style={{ backgroundColor: "#D8DCFA" }}
      >
        <ArrowForwardIcon className="w-[2rem] h-[2rem] text-blue-600" />
      </button>
    </div>
  );
};

export default memo(Testimonial);
