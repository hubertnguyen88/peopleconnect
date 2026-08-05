import { memo } from "react";
import Image from "next/image";

interface StarsProps {
  rating: number;
}

const Stars = ({ rating }: StarsProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starType = i <= rating ? "star_fill.png" : "star_line.png";
    stars.push(
      <li key={i}>
        <Image
          src={`/images/${starType}`}
          alt=""
          width={25}
          height={25}
          className="object-cover pr-2"
        />
      </li>
    );
  }

  return stars;
};

export default memo(Stars);
