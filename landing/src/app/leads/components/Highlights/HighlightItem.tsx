import { memo } from "react";
interface HighlightItemProps {
  id: number;
  title: string;
  content: string;
  img: string;
}

const HighlightItem = (props: HighlightItemProps) => {
  return (
    <div
      className="flex flex-col rounded-[24px] py-[28px] md:px-[30px] px-[28px] bg-[#FFFFFF] md:h-[220px] h-auto"
      style={{
        border: "1px solid var(--alpha-black-10, rgba(47, 43, 67, 0.10))",
      }}
      key={props.id}
    >
      <img
        src={props.img}
        width={50}
        height={50}
        alt=""
        className="mb-[24px]"
      />
      <h3 className="font-semibold text-[15px] mb-[8px] text-black">
        {props.title}
      </h3>
      <p
        className="text-gray-400 md:text-[12px] text-[14px] md:block hidden"
        style={{
          wordSpacing: "1px",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
        }}
      >
        {props.content}
      </p>
      <p
        className="text-gray-400 md:text-[12px] text-[14px] md:hidden block"
        style={{
          wordSpacing: "1px",
        }}
      >
        {props.content}
      </p>
    </div>
  );
};
export default memo(HighlightItem);
