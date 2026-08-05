"use client";
import { useState, useCallback, memo } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "../../../components/Button";
import Customer from "../../../components/Customers/Customer";
import { loyalCustomers } from "../../../constants/customers";
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
        <div className="lg:px-[14rem] px-4 lg:pt-[1rem] ">
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
          <div>
            <div className="w-full md:pt-[5rem] md:pb-[3rem] py-[5rem] text-center">
              <h1 className="text-[#4CE9B8] lg:text-3xl text-[1.5rem] font-semibold">
                <p className="lg:px-0 px-8">
                  Seamless Global Talent Mobility:{" "}
                </p>
                <p className="text-[#FFFFFF] lg:text-3xl text-[1.5rem] md:hidden block">
                  Your Visa & <br /> Immigration Solution
                </p>
                <p className="text-[#FFFFFF] lg:text-3xl text-[1.5rem] md:block hidden">
                  Your Visa & Immigration Solution
                </p>
              </h1>
              <p className="md:px-48 px-4 text-gray-500 text-[12px] py-2">
                Enhancing the Global Operations of Multinational Companies
                through the Provision of Specialized Visa Support Services that
                Empower and Streamline the Immigration Processes for
                International Workforce.
              </p>
              <div className="flex justify-center items-center pt-8">
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
            <div className="flex justify-center">
              <img
                src="/images/hero_visa.png"
                alt=""
                className="md:w-4/5 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden items-center justify-between px-[14rem] lg:bg-[#E4E4E8] w-full py-2">
        <div className="w-[22%]">
          <h1 className="text-sm font-bold text-black">Our Global Clients</h1>
        </div>
        <div className="w-[78%] flex justify-between items-center ">
          {loyalCustomers.map((customer) => (
            <Customer
              Avatar={customer.Avatar}
              key={customer.id}
              id={customer.id}
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden block bg-[#FDFCFA]">
        <div className="w-full">
          <h1 className="lg:text-sm text-2xl pt-8 text-center font-bold text-black">
            Our Global Clients
          </h1>
        </div>
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-2 gap-x-[3rem] gap-y-[2rem]">
            {loyalCustomers.map((customer) => (
              <Customer
                Avatar={customer.Avatar}
                key={customer.id}
                id={customer.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default memo(Hero);
