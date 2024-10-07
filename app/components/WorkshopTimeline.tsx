'use client'
import React, { FC, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

export const WorkshopTimeline = () => {
	return (
		<section className="w-full flex flex-col items-center">
			<div className="drop-shadow-container">
				<h1
					className={`text-[45px] lg:text-[57px] text-center text-white font-semibold md:px-[40px] max-md:mt-[48px] drop-shadow-text`}
				>
					Hack-A-Venture Timeline
				</h1>
			</div>
			<RoundFormatTimeline />
			<TrainingWorkshopTimeline />
		</section>
	);
};

const RoundFormatTimeline = () => {
	return (
		<section className="w-full flex flex-col items-center bg-center bg-[url('/world.png')] bg-no-repeat bg-[length:70%_70%]"
		>
			<style jsx>{`
				@media (max-width: 768px) {
					section {
						background-image: none;
					}
				}
			`}</style>
			<RoundedTimelineHeader text="ROUND FORMAT" />
			<p className="text-white text-[24px] font-bold mt-[70px] mb-[10px] max-md:hidden">
				Round
			</p>
			<DetailTimeLine
				rounded={true}
				numberOfOrder={1}
				rightSideOfTextSection={true}
				timeRangeText="Nov 4 – Nov 17, 2024"
				dashLineColor="#000000 0%, #0EA2FF 47%, #000000 100%"
				headline="IDEA PROPOSAL"
				subHeadline=""
				paragraph="Teams will submit a written proposal, outlining problem, solution and impact. Teams must identify the problem in the SDG in Vietnam they wish to solve, their product/solution proposal and how they plan to leverage AI, Blockchain, and Cybersecurity, and its potential impact on the chosen SDG. Teams must choose from 1 of 3 SDGs chosen by Organizing Committee, revealed at start of Round 01."
			/>

			<DetailTimeLine
				rounded={true}
				numberOfOrder={2}
				rightSideOfTextSection={false}
				timeRangeText="Nov 30 – Dec 13, 2024"
				headline="BUSINESS & TECHNICAL DOCUMENTATION"
				dashLineColor="#000000 0%, #10D8D8 47%, #000000 100%"
				subHeadline=""
				paragraph="Teams will develop a detailed business and technology documentation, using specific frameworks which will be released in Round 02. These may include things like business strategies, or systems architectures. Teams have to compose their documentation into a slide format, and submit a video presentation. These videos will be eligible for the People's Choice Award."
			/>

			<DetailTimeLine
				rounded={true}
				numberOfOrder={3}
				rightSideOfTextSection={true}
				timeRangeText="Jan 22 – Jan 23, 2025"
				headline="HACK DAY"
				subHeadline="(Prototype & Presentation)"
				dashLineColor="#000000 0%, #22E29A 47%, #000000 100%"
				paragraph="On HackDay, teams will develop and present a working prototype of their solution, followed by a live demo pitch to the industry panel of judges. This round tests the feasibility, impact, and marketability of the solution. This round will be done offline, at a Venue in HCMC which will be updated later."
			/>
		</section>
	);
};

const TrainingWorkshopTimeline = () => {
	return (
		<section className="w-[100%] flex flex-col items-center md:mt-[60px]">
			<RoundedTimelineHeader text="TRAINING WORKSHOPS" />
			<p className=" hidden lg:inline-block text-[18px] mt-[30px] mb-[40px] text-[#9CA3AF]">
				To support participants, Hack-A-Venture 2024 will provide a series of
				workshops
			</p>
			<p className="text-white text-[24px] font-bold mb-[10px] mt-[70px] lg:mt-0 max-md:hidden">Workshop</p>
			<DetailTimeLine
				rounded={false}
				numberOfOrder={1}
				rightSideOfTextSection={true}
				timeRangeText="Nov 11, 2024"
				dashLineColor="#000000 0%, #0EA2FF 47%, #000000 100%"
				headline="WORKSHOP 01"
				subHeadline="Design Thinking Training"
				paragraph="This workshop introduces participants to the design thinking framework, focusing on empathy, ideation, and defining solutions for social challenges."
			/>

			<DetailTimeLine
				rounded={false}
				numberOfOrder={2}
				rightSideOfTextSection={false}
				timeRangeText="Dec 2, 2024"
				dashLineColor="#000000 0%, #10D8D8 47%, #000000 100%"
				headline="WORKSHOP 02"
				subHeadline="Business & Technical Framework"
				paragraph="Teams will learn how to build solid business models and technical documentation, with guidance on how to implement these frameworks effectively."
			/>

			<DetailTimeLine
				rounded={false}
				numberOfOrder={3}
				rightSideOfTextSection={true}
				timeRangeText="On HackDay 01"
				dashLineColor="#000000 0%, #22E29A 47%, #000000 100%"
				headline="WORKSHOP 03"
				subHeadline="UI/UX Design and Pitching Techniques"
				paragraph="This session will help participants create user-friendly designs and develop compelling presentations for their final pitch."
			/>
			<DetailTimeLine
				rounded={false}
				numberOfOrder={4}
				rightSideOfTextSection={false}
				timeRangeText="Date TBA"
				dashLineColor="#000000 0%, #22E29A 47%, #000000 100%"
				headline="WORKSHOP 04"
				subHeadline="Technical Bootcamp"
				paragraph="Teams will be trained by industry professionals on how to build AI, Blockchain or Cybersecurity based solutions, with case studies. This workshop is conducted between WS2 and WS3, but specific date will be announced later."
			/>
		</section>
	);
};

const RoundedTimelineHeader: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div
			className="text-[#370f43] text-[20px] lg:text-[24px] font-semibold py-2 px-6 rounded-full text-2xl shadow-md max-md:mt-[24px] md:mt-[70px]"
			style={{
				background: "linear-gradient(-20deg, #deb7f0 0%, #f5ebfc 17%, #deb7f0 47%, #ca8ce6 82%, #f5ebfc 100%)",
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
	dashLineColor: string;
	paragraph: string;
}> = ({
	rounded,
	numberOfOrder,
	rightSideOfTextSection,
	timeRangeText,
	headline,
	subHeadline,
	paragraph,
	dashLineColor,
}) => {
		const { ref, inView } = useInView({
			triggerOnce: true,
			threshold: 0.2
		});

		const controls = useAnimation();

		useEffect(() => {
			if (inView) {
				controls.start('visible');
			}
		}, [controls, inView]);

		const leftSlideVariants = {
			hidden: { opacity: 0, x: 1000 },
			visible: { opacity: 1, x: 0 }
		}

		const rightSlideVariants = {
			hidden: { opacity: 0, x: -1000 },
			visible: { opacity: 1, x: 0 }
		}

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
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={rightSideOfTextSection ? leftSlideVariants : rightSlideVariants}
						transition={{ duration: 1.3, delay: 0.5 }}
					>
						<div
							className={`absolute ${rightSideOfTextSection ? "-right-[85px]" : "-left-[85px]"
								} ${rounded ? "top-[40px]" : "top-[25px]"} flex ${!rightSideOfTextSection && "flex-row-reverse"
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
					</motion.div>
				</section>

				{/*----------- mobile version ---------*/}
				<section className="w-[90%] flex flex-col items-center gap-[15px] my-[30px] lg:hidden">
					<MilestoneRound rounded={rounded} numberOfOrder={numberOfOrder} />
					<TimelineRange
						numberOfOrder={numberOfOrder}
						timeRangeText={timeRangeText}
					/>
					<div className="mx-auto w-[150px] h-[2.25px]" style={{ background: `linear-gradient(to right, ${dashLineColor}, rgba(14, 162, 255, 0))` }}></div>
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
			className={`${rounded
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
			className={` flex-shrink-0 w-[220px] text-center text-[16px] lg:text-[18px] font-semibold ${numberOfOrder == 1
				? "text-[#10D8D8]"
				: numberOfOrder == 2
					? "text-[#10D8D8]"
					: numberOfOrder == 3 ? "text-[#10D8D8]"
						: numberOfOrder == 4 && "text-[#10D8D8]"
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
			className={`absolute ${rounded ? "top-[98px]" : "top-[68px]"} w-0.5 ${rounded ? "h-[290px]" : "h-[350px]"
				} mx-auto -z-10`}
			style={{
				background: `linear-gradient(to bottom, ${numberOfOrder == 1
					? "#002840"
					: numberOfOrder == 2
						? "#023233"
						: numberOfOrder == 3 ? "#012417"
							: numberOfOrder == 4 && "#012417"
					}, transparent`,
			}}
		/>
	);
};
const DashLine: React.FC<{ rightSide: boolean }> = ({ rightSide }) => {
	return (
		<div
			className={`flex-shrink-0 w-[86px] flex items-center ${!rightSide
				? "ml-[50px] mr-[0px] flex-row-reverse"
				: "ml-[0px] mr-[50px]"
				} `}
		>
			<div className="w-4 h-4 rounded-full bg-[#7D139A]" />
			<div
				className={`${!rightSide ? "right-[15px]" : "left-[10px]"
					} h-1 w-[70px] -z-10`}
				style={{
					background: `linear-gradient(to ${!rightSide ? "left" : "right"
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
			className={`flex flex-col gap-[10px] lg:relative lg:-top-[10px] ${textAlign == "right"
				? "items-start text-start"
				: textAlign == "center"
					? "items-center text-center"
					: textAlign == "left" && "items-end text-end"
				}`}
		>
			<h1
				className={`text-[#C93FDD] lg:text-[28px] text-[24px] font-bold ${headLine == "" && "hidden"
					}`}
			>
				{headLine}
			</h1>
			<h2
				className={`text-white lg:text-[22px] text-[20px] font-semibold ${subHeadline == "" && "hidden"
					}`}
			>
				{subHeadline}
			</h2>
			<p
				className={`text-white lg:text[24px] text-[18px] font-normal ${paragraph == "" && "hidden"
					}`}
			>
				{paragraph}
			</p>
		</div>
	);
};
