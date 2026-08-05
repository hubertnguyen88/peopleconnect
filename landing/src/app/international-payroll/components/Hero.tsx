"use client";
import { useState, useCallback, memo } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "../../../components/Button";
import { scrollTo } from "@/utils";

const Hero = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <main>
      <div className="w-full bg-[#031021] xl:min-h-[100vh] min-h-5/6">
        <img
          className="absolute z-0 top-20 left-0 rotate-120 w-6/12 h-full hidden lg:block"
          src="/images/Ellipse_39_blue.png"
          alt=""
        />
        <div className="lg:px-[14rem] px-4 lg:py-[1rem] ">
          <div className="flex flex-row justify-between items-center lg:pt-0 pt-4">
            <Link href="/global-talent" className="w-6/12">
              <img className="md:w-48 w-44" src="/images/logo_1.png" alt="" />
            </Link>
            <div className="lg:block hidden w-6/12">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  target="_blank"
                  className="text-xs text-[#FFFFFF]"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="text-xs text-[#FFFFFF]"
                >
                  Services
                  <ExpandMoreIcon className="md:block hidden ml-[4px] p-1" />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="text-xs text-[#FFFFFF]"
                >
                  Blog
                </Link>
                <Link href="/">
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
            <div className="lg:hidden block w-6/12 flex justify-end">
              <DensityMediumSharpIcon
                className="text-white"
                onClick={handleClick}
                id="button"
                aria-controls={open ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open}
              />
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    href="https://blog.peopleconnect.world/"
                    target="_blank"
                    className="text-base"
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="" target="_blank" className="text-base">
                    Services
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/" className="text-base">
                    Get Started
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-6/12 w-full md:py-[7rem] py-[5rem] z-10 lg:text-start text-center">
              <h1 className="text-[#4CE9B8] lg:text-[26px] text-[1.5rem] font-semibold lg:max-w-[21rem]">
                Seamless <br /> International Payroll:{" "}
                <p className="text-[#FFFFFF] lg:text-[25px] text-[1.5rem]">
                  {" "}
                  Unlock Financial Efficiency for Your Global Workforce
                </p>
              </h1>
              <p className="text-gray-500 text-sm py-2">
                Empowering multinational companies worldwide by providing them
                with expertly tailored and comprehensive payroll management
                services to optimize their operational efficiency and ensure
                compliance across diverse geographical regions and regulatory
                frameworks.
              </p>
              <div className="flex lg:justify-start justify-center py-8">
                <Button
                  onClick={() => {
                    scrollTo("contact-form");
                  }}
                >
                  Contact Us Now{" "}
                  <ArrowForwardIcon
                    sx={{ width: 20, height: 20 }}
                    className="ml-[4px]"
                  />
                </Button>
              </div>
            </div>
            <div className="md:w-6/12 md:py-[7rem] py-[1rem] md:pl-8 pl-0 w-full">
              <img src="/images/hero_payroll.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default memo(Hero);
