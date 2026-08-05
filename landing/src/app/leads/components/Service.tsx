import { memo } from "react";

interface ServiceProps {
  title: string;
  img: string;
  data: {
    id: number;
    title: string;
    content: string;
    imgItem: string;
  }[];
}

const Service = (props: ServiceProps) => {
  const { title, data, img } = props;

  return (
    <div className="relative bg-[#031021] flex flex-wrap pt-16 lg:pb-16 pb-0 mt-32 lg:px-20">
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

      <div className="h-4/6 lg:h-3/5 w-full lg:w-2/4 lg:pe-14 z-10 lg:order-1 order-2 lg:pt-0 pt-16">
        <h2 className="text-[#FFFFFF] lg:text-4xl text-2xl font-semibold py-1 lg:text-left text-center pl-16 md:block hidden">
          {title}
        </h2>
        <img
          className="object-contain px-1 lg:ml-auto lg:ml-0 mx-auto"
          src={img}
          alt=""
        />
      </div>

      <div className="lg:w-2/4 lg:mt-[0rem] w-full object-contain lg:pe-20 z-10 lg:order-2 order-1 lg:px-0 px-4">
        <h2 className="text-[#FFFFFF] lg:text-4xl text-2xl font-semibold py-1 lg:text-left text-center md:hidden block">
          {title}
        </h2>
        {data.map((service) => (
          <div
            key={service.id}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
            className="mt-4 p-5 rounded-2xl"
          >
            <div className="bg-gray-400 w-12 h-12 object-contain rounded-lg flex justify-center items-center">
              <img
                className="text-[#FFFFFF] object-contain"
                width={30}
                height={30}
                src={service.imgItem}
                alt=""
              />
            </div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold pt-4">
              {service.title}
            </h3>
            <p className="text-gray-500 text-xs pt-2 lg:px-0 leading-5 tracking-tight">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Service);
