import { memo } from "react";
import HighlightItem from "./HighlightItem";
import { highlightPayrolls } from "../../../../constants";
const Highlights = () => {
  return (
    <div className="lg:bg-[#FFFFFF] bg-[#FDFCFA]">
      <div className="text-center font-bold md:text-[36px] text-[25px] text-[#0C102E]">
        Why choose Us
      </div>
      <div className="md:mt-[72px] mt-[32px] lg:px-52 md:px-24 px-4">
        <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {highlightPayrolls.map((ai) => (
            <HighlightItem
              key={ai.id}
              id={ai.id}
              img={ai.img}
              title={ai.title}
              content={ai.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Highlights);
