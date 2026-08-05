import Link from "next/link";
import { memo } from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#031021] w-full bg-gray-900 flex flex-wrap md:pt-[4.75rem] md:pb-[5.75rem] xl:px-52 lg:px-24 pt-[2rem] px-8 pb-12 justify-between">
        <div className="md:mb-0 mb-12 md:pr-0 pr-9 lg:max-w-[28rem] md:max-w-[20rem]">
          <Link href="/">
            <img
              className="md:w-60 w-40 object-contain"
              src="/images/logo_1.png"
              alt=""
            />
          </Link>

          <p className="text-[12px] pt-4 text-gray-500">
            People Connect has worked alongside established companies +
            entrepreneurs in Worldwide. We simply leverage our HR expertise &
            Technology to help businesses achieve their target.
          </p>
        </div>

        <div className="text-[13px] flex">
          <ul className="md:mr-[8.25rem] mr-[6rem]">
            <li className="font-semibold text-[#ffff] ">Products</li>
            <li className="py-4 text-gray-500">
              <Link
                href="https://interviewbox.app/"
                target="_blank"
                className="hover:underline"
              >
                Interview Box
              </Link>
            </li>
          </ul>

          <ul>
            <li className="font-semibold text-[#ffff]">Social</li>
            <li className="py-4 text-gray-500">
              <Link
                href="https://www.linkedin.com/company/peopleconnectsolutions"
                target="_blank"
                className="hover:underline"
              >
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-white text-black text-center text-[14px] py-4">
        Copyright {new Date().getFullYear()} People Connect All Right Reserved
      </div>
    </>
  );
};

export default memo(Footer);
