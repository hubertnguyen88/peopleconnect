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
      className="flex flex-col rounded-[24px]  bg-[#FFFFFF]"
      style={{
        border: "1px solid var(--alpha-black-10, rgba(47, 43, 67, 0.10))",
      }}
      key={props.id}
    >
      <img src={props.img} width={500} height={150} alt="" />
      <div className="py-[15px] md:px-[30px] px-[28px]">
        <h3 className="font-semibold text-[16px] mb-[8px] text-black">
          {props.title}
        </h3>
        <p
          className="text-gray-400 md:text-[12px] text-[14px]"
          style={{ wordSpacing: "1px" }}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};
export default memo(HighlightItem);
