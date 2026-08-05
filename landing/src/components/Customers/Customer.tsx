import { SvgIconProps } from "@mui/material";
import { memo } from "react";

import "./customer.css";

interface CustomerProps {
  id: number;
  Avatar: (props: SvgIconProps) => JSX.Element;
}

const Customer = (props: CustomerProps) => {
  const { Avatar } = props;
  return (
    <div className="md:w-[8.2rem] md:h-[3rem] w-[6rem] h-[2.2rem]">
      <Avatar className="customer-svg md:w-[8.2rem] md:h-[3rem] w-[6rem] h-[2.2rem]" />
    </div>
  );
};

export default memo(Customer);
