"use client";
import { useState } from "react";
import { memo } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

interface FAQsProps {
  title: string;
  img: string;
  data: {
    id: number;
    title: string;
    content: string;
  }[];
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
}));

const AccordionSummary = styled(
  (props: AccordionSummaryProps & { expanded: boolean }) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  )
)((expanded) => ({
  background: "transparent",
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-content": {
    marginRight: 0,
  },
  "& .css-ahj2mt-MuiTypography-root": {
    fontSize: "17px",
    fontWeight: 600,
  },

  fontSize: "14px",
  color: expanded ? "#0C102E" : "#2F2B4380",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#FFF",
  fontSize: "10px",
  color: "#2F2B4380",
}));

const FAQs = (props: FAQsProps) => {
  const { title, data, img } = props;
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="relative flex flex-wrap py-16 mt-26 lg:px-20 px-4">
      {/* Chưa custom bỏ được border của phần này*/}
      <div className="lg:w-[50%] md:w-[50%] w-[0%] md:block hidden pl-10">
        <h1 className="font-semibold text-[36px]">{title}</h1>
        {data.map((question) => (
          <Accordion
            expanded={expanded === `panel${question.id}`}
            onChange={handleChange(`panel${question.id}`)}
            key={question.id}
          >
            <AccordionSummary
              aria-controls={`panel${question.id}d-content`}
              id={`panel${question.id}d-header`}
              expandIcon={
                expanded === `panel${question.id}` ? (
                  <RemoveIcon className="text-[#0C102E] text-[18px]" />
                ) : (
                  <AddIcon className="text-[#0C102E] text-[18px]" />
                )
              }
              expanded={expanded === `panel${question.id}`}
            >
              <p className="bg-[#D0D4F8] text-[#3D50E8] rounded-full px-2.5 py-[0.25rem] font-medium">
                {question.id}
              </p>
              <Typography className="font-black text-[10px] pl-4">
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="md:hidden block">
        <h1 className="font-semibold text-3xl text-center">{title}</h1>
        {data.map((question) => (
          <div
            key={question.id}
            className="rounded-2xl border border-[#2f2b431a] p-[16px] text-[14px] mt-4 "
          >
            <div className="flex">
              <p className="bg-[#D0D4F8] text-[#3D50E8] rounded-full px-2.5 py-[0.25rem] font-medium">
                {question.id}
              </p>
              <h1 className="font-bold mt-1 ml-2">{question.title}</h1>
            </div>

            <p className="pt-2 text-[#2F2B4399] text-[11px]">
              {question.content}
            </p>
          </div>
        ))}
      </div>
      <div className="h-4/6 lg:h-2/5 w-full lg:w-[45%] lg:pe-14 md:pl-8 pl-0 z-10 lg:order-1 order-2 lg:pt-0 pt-16">
        <img
          className="object-contain lg:ml-auto lg:ml-0 mx-auto"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};
export default memo(FAQs);
