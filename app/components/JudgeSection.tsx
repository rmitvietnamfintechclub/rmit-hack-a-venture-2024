"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import React from 'react';
import '../css/JudgeSection.css';
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

interface JudgeInfo {
	name: string,
	title: string,
	image_path: string,
}

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {
	buttonOnClick?: () => void;
}

export const PreArrow: React.FC<ArrowProps> = ({ buttonOnClick, ...props }) => {
	return (
		<div {...props} className={clsx("absolute left-0 z-10", props.className)}>
			<button
				type="button"
				title="Previous"
				onClick={buttonOnClick}
				className="absolute left-0 flex justify-center w-10 h-10 rounded-full bg-[#C93FDD] hover:bg-[#e74aff]"
			>
				<ChevronLeft size={40} className="relative right-[0.15rem]" color="white" />
			</button>
		</div>
	);
};

export const NextArrow: React.FC<ArrowProps> = ({
	buttonOnClick,
	...props
}) => {
	return (
		<div {...props} className={clsx("absolute z-10 right-0", props.className)}>
			<button
				type="button"
				title="Next"
				onClick={buttonOnClick}
				className="absolute right-0 flex justify-center w-10 h-10 rounded-full bg-[#C93FDD] hover:bg-[#e74aff]"
			>
				<ChevronRight size={40} color="white" className="relative left-[0.15rem]" />
			</button>
		</div>
	);
};

const JudgeItem = (props: JudgeInfo) => {
	const { name, title, image_path } = props;
	return (
		<div className="flex flex-col md:w-[250px] max-md:py-[16px] max-md:px-[24px] max-md:w-full text-center">
			<Image src={`/judges/${image_path}`} alt={name} className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
			<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2 text-white">{name}</h3>
			<p className="md:text-base max-md:text-md text-[#9CA3AF]">{title}</p>
		</div>
	)
}

export const JudgeSection = () => {
	const settings = {
		dots: true,
		prevArrow: <PreArrow />,
		nextArrow: <NextArrow />,
		// arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		initialSlide: 0,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
				}
			}
		]
	};
	const judges = [
		{
			name: "Mr. Nhat Le",
			title: "Founder & CEO, AirCity",
			image_path: "Nhat_Le.png"
		},
		{
			name: "Mr. Nghiem Sy Phu",
			title: "Senior Cyber Security Manager, Fossil Group",
			image_path: "Phu_Nghiem1.png"
		},
		{
			name: "Mr. William Ross",
			title: "CFA, Chief Marketing & Distribution Officer, Dragon Capital",
			image_path: "Will_Ross.png"
		},
		{
			name: "Dr. Huy Pham",
			title: "Lecturer, Finance, RMIT Vietnam",
			image_path: "Huy_Pham.png"
		},
		{
			name: "Dr. Minh Nguyen",
			title: "Lecturer, Blockchain, RMIT Vietnam",
			image_path: "Minh_Nguyen.png"
		},
		{
			name: "Dr. Ginel Dorleon",
			title: "Lecturer, A.I., RMIT Vietnam",
			image_path: "Ginel.png"
		},
		{
			name: "Dr. Vinh Dang",
			title: "Lecturer, Master of A.I., RMIT Vietnam",
			image_path: "Vinh_Dang.png"
		},
		{
			name: "Dr. Ling Huo Chong",
			title: "Senior Lecturer, Software Engineering, RMIT Vietnam",
			image_path: "Ling_Huo.png"
		},
		{
			name: "Dr. Tuan Chu",
			title: "Deputy Head, Bachelor of Business, RMIT Vietnam",
			image_path: "Tuan_Chu.png"
		},
		{
			name: "Dr. Minh Dinh",
			title: "Senior Lecturer, A.I., RMIT Vietnam",
			image_path: "Minh_Dinh.png"
		},
		{
			name: "Dr. Timothy McBush Hiele",
			title: "Lecturer, Digital Business RMIT Vietnam",
			image_path: "Timothy_Hiele.png"
		},
		{
			name: "Dr. Majo George",
			title: "Senior Lecturer, Business & Law, RMIT Vietnam",
			image_path: "Majo_George.png"
		},
		{
			name: "Dr. Jeff Nijsse",
			title: "Senior Lecturer, Software Engineering, RMIT Vietnam",
			image_path: "Jeff_Nijsse.png"
		},
		{
			name: "Dr. Muhammad Ashfa",
			title: "Research Fellow, RMIT Vietnam",
			image_path: "Mud_Ashfaq.png"
		},
		{
			name: "Dr. Tam Le",
			title: "Lecturer, Economics & Finance, RMIT Vietnam",
			image_path: "Tam_Le.png"
		},
		{
			name: "Dr. Son Ha",
			title: "Lecturer, Blockchain, RMIT Vietnam",
			image_path: "Son_Ha.png"
		}
	];
	return (
		<>
			<div
				style={{
					background: "linear-gradient(0deg, #000000 0%, #111827 42%, #000000 100%)"
				}}
				className="mt-[60px]"
			>
				<h1 className="max-md:text-4xl md:text-6xl text-center text-white font-semibold md:px-[40px] max-md:mb-[20px] drop-shadow-text">Hack-A-Venture <span className="text-[#C93FDD]">Judges</span></h1>
				<h2 className="max-md:text-2xl md:text-3xl text-center text-white font-semibold italic mt-[32px] md:px-[40px] max-md:mb-[20px]">(To be updated)</h2>
				<div className="slider-container mx-auto w-[80vw] md:mt-[40px]">
					<Slider {...settings}>
						{judges.map((judge, key) => <JudgeItem key={key} name={judge.name} title={judge.title} image_path={judge.image_path} />)}
					</Slider>
				</div>
			</div>
		</>
	)
}
