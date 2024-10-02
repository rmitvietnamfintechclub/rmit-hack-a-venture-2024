import React, { FC } from "react";

export const WorkshopTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1
        className={`text-[45px] lg:text-[57px] text-center text-white font-semibold px-[40px]`}
        style={{
          textShadow: "1px 3px 15px rgba(201, 63, 221, 1)",
        }}
      >
        Hack-A-Venture Timeline
      </h1>
      <RoundFormatTimeline />
      <TrainingWorkshopTimeline />
    </section>
  );
};

const RoundFormatTimeline = () => {
  return (
    <section className="w-[100%] flex flex-col items-center">
      <RoundedTimelineHeader text="ROUND FORMATS" />
      <p className="text-white text-[24px] font-bold mt-[70px] mb-[10px]">
        Round
      </p>
      <DetailTimeLine
        rounded={true}
        numberOfOrder={1}
        rightSideOfTextSection={true}
        timeRangeText="Nov 4 – Nov 17, 2024"
        headline="IDEA PROPOSAL"
        subHeadline=""
        paragraph="Teams will submit a written proposal that outlines the problem they wish to solve and how they plan to address it using AI, Blockchain, or Cybersecurity. This round focuses on creative thinking and solution ideation."
      />

      <DetailTimeLine
        rounded={true}
        numberOfOrder={2}
        rightSideOfTextSection={false}
        timeRangeText="Nov 30 – Dec 13, 2024"
        headline="BUSINESS & TECHNICAL DOCUMENTATION"
        subHeadline=""
        paragraph="Teams will develop detailed business and technical documentation to support their idea. This includes business models, market analysis, and technical frameworks. Teams will also submit a video presentation of their solution."
      />

      <DetailTimeLine
        rounded={true}
        numberOfOrder={3}
        rightSideOfTextSection={true}
        timeRangeText="Jan 22 – Jan 23, 2025"
        headline="HACK DAY"
        subHeadline="(Prototype & Presentation)"
        paragraph="On Hack Day, teams will build and present a working prototype of their solution, followed by a live pitch to the judging panel. This round tests the feasibility, impact, and scalability of the solution."
      />
    </section>
  );
};

const TrainingWorkshopTimeline = () => {
  return (
    <section className="w-[100%] flex flex-col items-center">
      <RoundedTimelineHeader text="TRAINING WORKSHOPS" />
      <p className=" hidden lg:inline-block text-[18px] mt-[30px] mb-[40px] text-[#9CA3AF]">
        To support participants, Hack-A-Venture 2024 will provide a series of
        workshops
      </p>
      <p className="text-white text-[24px] font-bold mb-[10px] mt-[70px] lg:mt-0">Workshop</p>
      <DetailTimeLine
        rounded={false}
        numberOfOrder={1}
        rightSideOfTextSection={true}
        timeRangeText="Nov 11, 2024"
        headline="WORKSHOP 01"
        subHeadline="Design Thinking Training"
        paragraph="This workshop introduces participants to the design thinking framework, focusing on empathy, ideation, and defining solutions for social challenges."
      />

      <DetailTimeLine
        rounded={false}
        numberOfOrder={2}
        rightSideOfTextSection={false}
        timeRangeText="Nov 30 – Dec 13, 2024"
        headline="WORKSHOP 02"
        subHeadline="Business & Technical Framework"
        paragraph="Teams will learn how to build solid business models and technical documentation, with guidance on how to implement these frameworks effectively."
      />

      <DetailTimeLine
        rounded={false}
        numberOfOrder={3}
        rightSideOfTextSection={true}
        timeRangeText="Date TBA"
        headline="WORKSHOP 03"
        subHeadline="UI/UX Design and Pitching Techniques"
        paragraph="This session will help participants create user-friendly designs and develop compelling presentations for their final pitch."
      />
    </section>
  );
};

const RoundedTimelineHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div
      className="text-[#370f43] text-[20px] lg:text-[24px] font-semibold py-2 px-6 rounded-full text-xl shadow-md mt-[70px]"
      style={{
        background: "linear-gradient(170deg, white, #bc89f9 30%, white",
      }}
    >
      {text}
    </div>
  );
};

const DetailTimeLine: React.FC<{
  rounded: boolean;
  numberOfOrder: number;
  rightSideOfTextSection: boolean;
  timeRangeText: string;
  headline: string;
  subHeadline: string;
  paragraph: string;
}> = ({
  rounded,
  numberOfOrder,
  rightSideOfTextSection,
  timeRangeText,
  headline,
  subHeadline,
  paragraph,
}) => {
  return (
    <>
      {/*----------- laptop version ---------*/}
      <section className="relative w-[80%] lg:pb-[300px] lg:block hidden">
        {/*--------- milestone round number and timeline -------*/}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[30px]">
          <MilestoneRound rounded={rounded} numberOfOrder={numberOfOrder} />
          <VerticalLine numberOfOrder={numberOfOrder} rounded={rounded} />
          <TimelineRange
            numberOfOrder={numberOfOrder}
            timeRangeText={timeRangeText}
          />
        </div>
        {/*---------- dashline and textSection ------*/}
        <div
          className={`absolute ${
            rightSideOfTextSection ? "-right-[85px]" : "-left-[85px]"
          } ${rounded ? "top-[40px]" : "top-[25px]"} flex ${
            !rightSideOfTextSection && "flex-row-reverse"
          } items-start w-[49%]`}
        >
          <DashLine rightSide={rightSideOfTextSection} />
          <TextSection
            textAlign={rightSideOfTextSection ? "right" : "left"}
            headLine={headline}
            subHeadline={subHeadline}
            paragraph={paragraph}
          />
        </div>
      </section>

      {/*----------- mobile version ---------*/}
      <section className="w-[90%] flex flex-col items-center gap-[15px] my-[30px] lg:hidden">
        <MilestoneRound rounded={rounded} numberOfOrder={numberOfOrder} />
        <TimelineRange
          numberOfOrder={numberOfOrder}
          timeRangeText={timeRangeText}
        />
<div className="mx-auto w-[150px] h-[2.25px]" style={{background:"linear-gradient(to right, rgba(14, 162, 255, 0), #0EA2FF, rgba(14, 162, 255, 0))"}}></div>
        <TextSection
          textAlign='center'
          headLine={headline}
          subHeadline={subHeadline}
          paragraph={paragraph}
        />{" "}
      </section>
    </>
  );
};

const MilestoneRound: React.FC<{ rounded: boolean; numberOfOrder: number }> = ({
  rounded,
  numberOfOrder,
}) => {
  return (
    <div
      className={`${
        rounded
          ? "rounded-full border-[12px] w-[92px] h-[92px]"
          : "rounded-lg border-[4px] w-[68px] h-[68px]"
      } border-[#582768] bg-[#C93FDD] #C93FDDE5 shadow-lg flex items-center justify-center text-[32px] font-bold`}
      style={{
        boxShadow: "0 0 5px 7px #291231", // Custom shadow
        // filter: "blur(5px)", // Blur for soft shadow effect
      }}
    >
      0{numberOfOrder}
    </div>
  );
};

const TimelineRange: React.FC<{
  numberOfOrder: number;
  timeRangeText: string;
}> = ({ numberOfOrder, timeRangeText }) => {
  return (
    <h3
      className={` flex-shrink-0 w-[220px] text-center text-[16px] lg:text-[18px] font-semibold ${
        numberOfOrder == 1
          ? "text-[#0EA2FF]"
          : numberOfOrder == 2
          ? "text-[#10D8D8]"
          : numberOfOrder == 3 && "text-[#22E29A]"
      }`}
    >
      {timeRangeText}
    </h3>
  );
};
const VerticalLine: React.FC<{ numberOfOrder: number; rounded: boolean }> = ({
  numberOfOrder,
  rounded,
}) => {
  return (
    <div
      className={`absolute ${rounded ? "top-[98px]" : "top-[68px]"} w-0.5 ${
        rounded ? "h-[290px]" : "h-[350px]"
      } mx-auto -z-10`}
      style={{
        background: `linear-gradient(to bottom, ${
          numberOfOrder == 1
            ? "#002840"
            : numberOfOrder == 2
            ? "#023233"
            : numberOfOrder == 3 && "#012417"
        }, transparent`,
      }}
    />
  );
};
const DashLine: React.FC<{ rightSide: boolean }> = ({ rightSide }) => {
  return (
    <div
      className={`flex-shrink-0 w-[86px] flex items-center ${
        !rightSide
          ? "ml-[50px] mr-[0px] flex-row-reverse"
          : "ml-[0px] mr-[50px]"
      } `}
    >
      <div className="w-4 h-4 rounded-full bg-[#7D139A]" />
      <div
        className={`${
          !rightSide ? "right-[15px]" : "left-[10px]"
        } h-1 w-[70px] -z-10`}
        style={{
          background: `linear-gradient(to ${
            !rightSide ? "left" : "right"
          }, #7D319A, transparent)`,
        }}
      />
    </div>
  );
};

const TextSection: React.FC<{
  textAlign: string;
  headLine: string;
  subHeadline: string;
  paragraph: string;
}> = ({ textAlign, headLine, subHeadline, paragraph }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] lg:relative lg:-top-[10px] ${
        textAlign == "right"
          ? "items-start text-start"
          : textAlign == "center"
          ? "items-center text-center"
          : textAlign == "left" && "items-end text-end"
      }`}
    >
      <h1
        className={`text-[#C93FDD] lg:text-[28px] text-[24px] font-bold ${
          headLine == "" && "hidden"
        }`}
      >
        {headLine}
      </h1>
      <h2
        className={`text-white lg:text-[22px] text-[20px] font-semibold ${
          subHeadline == "" && "hidden"
        }`}
      >
        {subHeadline}
      </h2>
      <p
        className={`text-[#9CA3AF] lg:text[24px] text-[18px] font-normal ${
          paragraph == "" && "hidden"
        }`}
      >
        {paragraph}
      </p>
    </div>
  );
};
