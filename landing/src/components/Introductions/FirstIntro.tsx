import { memo } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Button from "../Button";

const FirstIntro = () => {
  return (
    <div className="relative bg-[#031021] flex flex-wrap py-16 lg:px-20">
      <img
        className="absolute top-0 right-0 rotate-120 w-2/5 h-full hidden lg:block"
        src="/images/Ellipse_40.png"
        alt=""
      />

      <img
        className="absolute bottom-0 left-0 rotate-120 w-9/12 h-full hidden lg:block"
        src="/images/Ellipse_39.png"
        alt=""
      />

      <div className="h-4/6 lg:h-3/5 w-full lg:w-2/4 lg:pe-14 z-10 lg:order-1 order-2">
        <img
          className="object-contain px-1 lg:ml-auto lg:ml-0 mx-auto"
          src="/images/image_content.png"
          alt=""
        />
      </div>

      <div className="lg:w-2/4 lg:mt-[5rem] w-full object-contain lg:pe-20 z-10 lg:order-2 order-1">
        <div className="lg:block hidden">
          <h2 className="text-[#4CE9B8] lg:text-4xl text-xl font-semibold py-1">
            Interview Box{" "}
            <p className="text-[#FFFFFF]">Training & Recruiting Platform</p>
          </h2>
        </div>

        <div className="lg:hidden block">
          <h2 className="text-[2rem] font-semibold py-1 text-center">
            <span className="text-[#4CE9B8]">Interview Box</span>{" "}
            <span className="text-[#FFFFFF]">
              Training & Recruiting Platform
            </span>
          </h2>
        </div>

        <p className="text-gray-500 text-[14px] pt-2 lg:px-0 px-5 lg:text-left text-center leading-5 tracking-tight">
          Interview Box gives you access to Live and OnDemand video interviews.
          Interview Box Live interview lets you use video to connect recruiters,
          hiring managers, and candidates in real-time. And an OnDemand video
          interview lets candidates record responses to structured, consistent,
          job-relevant questions anytime, anywhere and without the recruiter or
          hiring manager’s presence. Recorded OnDemand or Live interviews can be
          shared among the hiring team, and they can easily share feedback.
        </p>

        <div className="flex lg:justify-start justify-center py-8">
          <Link href="https://interviewbox.app/" target="_blank">
            <Button>
              Get Started{" "}
              <ArrowForwardIcon
                sx={{ width: 20, height: 20 }}
                className="ml-[4px]"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(FirstIntro);
