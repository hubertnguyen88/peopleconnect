import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import "../components/index.css";

interface ServiceProps {
  image: string;
  title: string;
  content: string;
  src: string;
}

const Service = (props: ServiceProps) => {
  return (
    <>
      <div className="h-64 relative border-1.5 rounded-2xl border-gray-300 bg-gradient md:block hidden">
        <div>
          <Image
            src={props.image}
            width={60}
            height={60}
            alt=""
            className="mt-4 ml-4 service-img"
          />
        </div>

        <div className="service-content-container">
          <h3 className="font-semibold text-sm px-2.5 leading-5 pt-16 text-[#000000] service-content-title">
            <Link href={props.src}>{props.title}</Link>
          </h3>
          <p className="text-gray-400 px-2.5 pt-1 line-clamp-3 service-content-content text-[11px]">
            {props.content}
          </p>
        </div>
      </div>
      <div className="h-64 relative border-1.5 rounded-2xl border-gray-300 bg-[#ffffff] md:hidden block drop-shadow-md">
        <div>
          <Image
            src={props.image}
            width={60}
            height={60}
            alt=""
            className="mt-4 ml-4 service-img"
          />
        </div>
        <div className="service-content-container">
          <h3 className="font-semibold text-base px-2.5 leading-5 pt-2 text-[#000000] service-content-title">
            {props.title}
          </h3>
          <p
            className="text-gray-400 px-2.5 pt-1 service-content-content"
            style={{ fontSize: "10px" }}
          >
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(Service);
