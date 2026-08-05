"use client";
import { useState, memo, useCallback } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Button from "./Button";
import "./index.css";

const Hero = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [services, setServices] = useState(null);

  const open = Boolean(anchorEl);
  const openServices = Boolean(services);

  const handleClick = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClickServices = useCallback((event: any) => {
    setServices(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleCloseServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServices(null);
  };

  return (
    <div className="flex flex-row xl:min-h-[100vh] min-h-5/6 bg-[#031021]">
      <div className="flex flex-col lg:w-1/2 w-screen py-4 md:pl-[13rem] px-[1rem]">
        <div className="flex flow-row justify-between items-center">
          <Link href="/">
            <img className="md:w-48 w-40" src="/images/logo_1.png" alt="" />
          </Link>
          <div className="relative">
            <div className="lg:hidden flex items-center">
              <div className="mr-4 text-lg hover:underline cursor-pointer relative">
                <div
                  onClick={handleClickServices}
                  aria-controls={openServices ? "menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openServices}
                >
                  Services
                  <ExpandMoreIcon className="text-white" id="button1" />
                </div>

                <Menu
                  id="menu1"
                  anchorEl={services}
                  open={openServices}
                  onClose={handleCloseServices}
                  MenuListProps={{
                    "aria-labelledby": "button1",
                  }}
                >
                  <MenuItem onClick={handleCloseServices}>
                    <Link
                      href="https://peopleconnect.world/global-talent"
                      target="_blank"
                      className="pr-16 text-base"
                    >
                      Global Talent Acquisition
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseServices}>
                    <Link
                      href="https://peopleconnect.world/visa-immigration"
                      target="_blank"
                      className="pr-0 text-base"
                    >
                      Visa & Immigration Support
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseServices}>
                    <Link
                      href="https://peopleconnect.world/international-payroll"
                      target="_blank"
                      className="pr-0 text-base"
                    >
                      International Payroll
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseServices}>
                    <Link
                      href="https://peopleconnect.world/international-payroll"
                      target="_blank"
                      className="pr-0 text-base"
                    >
                      People Connect Leads
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseServices}>
                    <Link
                      href="https://survey.larksuite.com/m?t=siki03nHQ2Oi-k6za"
                      target="_blank"
                      className="pr-0 text-base"
                    >
                      Headhunt Service
                    </Link>
                  </MenuItem>
                </Menu>
              </div>

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
                    className="pr-16 text-base"
                  >
                    Blog
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/" className="pr-16 text-base">
                    Get Started
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        <div className="self-center lg:text-start text-center xl:mt-[8rem] mt-[5.5rem] lg:w-[400px]">
          <div className="flex lg:justify-start justify-center mb-8">
            <Link
              href="https://www.f6s.com/companies/hr-tech/canada/co"
              className="bg-white"
              style={{ width: "fit-content" }}
              rel="nofollow"
              target="_blank"
            >
              <img
                className="md:w-48 w-40"
                src="/images/F6S_Top_Company_HR Tech_5.png"
                alt=""
              />
            </Link>
          </div>

          <h1 className="text-[#FFFFFF] lg:text-[2rem] text-[2rem] font-semibold md:px-0 px-12">
            The Ultimate Partner for
            <p className="text-[#4CE9B8] lg:text-[2rem] text-[2rem]">
              Your HR Solutions
            </p>
          </h1>

          <p className="text-gray-500 md:text-[12px] text-sm md:pr-8 pt-2 w-full sm:px-0 px-10 xl:leading-5 w-4/6 tracking-tight">
            Our mission is to empower businesses to focus on growth by
            delivering comprehensive and efficient HR outsourcing services. We
            envision becoming the leading provider, revolutionizing HR
            management through innovative technologies and personalized support,
            driving sustainable success for our clients in the global market.
          </p>

          <div className="flex lg:justify-start justify-center py-8">
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
      </div>

      <div className="lg:block hidden lg:w-1/2 py-4 xl:pr-[12rem] md:pr-[8rem] pr-[1rem] lg:bg-[url('/images/background_hero_right.png')] bg-cover bg-top bg-no-repeat">
        <div className="flex flow-row justify-end">
          <div className="lg:flex hidden text-[#ffff] items-center">
            <div className="pr-16 text-lg hover:underline cursor-pointer relative">
              <div
                onClick={handleClickServices}
                aria-controls={openServices ? "menu1" : undefined}
                aria-haspopup="true"
                aria-expanded={openServices}
              >
                Services
                <ExpandMoreIcon className="text-white" id="button1" />
              </div>

              <Menu
                id="menu1"
                anchorEl={services}
                open={openServices}
                onClose={handleCloseServices}
                MenuListProps={{
                  "aria-labelledby": "button1",
                }}
              >
                <MenuItem onClick={handleCloseServices}>
                  <Link
                    href="https://peopleconnect.world/global-talent"
                    target="_blank"
                    className="pr-16 text-base"
                  >
                    Global Talent Acquisition
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseServices}>
                  <Link
                    href="https://peopleconnect.world/visa-immigration"
                    target="_blank"
                    className="pr-0 text-base"
                  >
                    Visa & Immigration Support
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseServices}>
                  <Link
                    href="https://peopleconnect.world/international-payroll"
                    target="_blank"
                    className="pr-0 text-base"
                  >
                    International Payroll
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseServices}>
                  <Link
                    href="https://peopleconnect.world/international-payroll"
                    target="_blank"
                    className="pr-0 text-base"
                  >
                    People Connect Leads
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseServices}>
                  <Link
                    href="https://survey.larksuite.com/m?t=siki03nHQ2Oi-k6za"
                    target="_blank"
                    className="pr-0 text-base"
                  >
                    Headhunt Service
                  </Link>
                </MenuItem>
              </Menu>
            </div>

            <Link
              href="https://blog.peopleconnect.world/"
              target="_blank"
              className="pr-16 text-lg hover:underline"
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
      </div>
    </div>
  );
};

export default memo(Hero);
