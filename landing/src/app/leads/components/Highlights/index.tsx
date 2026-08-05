import { memo } from "react";
import HighlightItem from "./HighlightItem";
import { highlightLeads } from "../../../../constants";
const Highlights = () => {
  return (
    <div className="lg:bg-[#FFFFFF] bg-[#FDFCFA]">
      <div className="text-center font-bold md:text-[36px] text-[25px] text-[#0C102E]">
        Key features
      </div>
      <div className="md:mt-[72px] mt-[32px] lg:px-52 md:px-24 px-4">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-1">
          {highlightLeads.map((ai, index) => (
            <div
              key={ai.id}
              className={
                index === 0
                  ? "lg:col-span-2 md:col-span-2 sm:col-span-1"
                  : "lg:col-span-1 md:col-span-1 sm:col-span-1"
              }
            >
              <HighlightItem
                id={ai.id}
                img={ai.img}
                title={ai.title}
                content={ai.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Highlights);
