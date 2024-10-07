import React from 'react';
import "../css/HeroSection.css"

interface SponsorInfo {
	image_path: string,
	name: string,
	description: string,
}

const Sponsor = (props: SponsorInfo) => {
	const { image_path, name, description } = props;
	return (
		<div className="flex items-center mb-8">
			<div className="flex-shrink-0 w-72 h-72 bg-white rounded-lg flex items-center justify-center">
				<img
					src={`/diamond_sponsors/${image_path}`}
					alt="Dragon Capital"
					className="h-64 w-64 object-contain"
				/>
			</div>
			<div className="ml-6">
				<h2 className="text-2xl font-semibold">{name}</h2>
				<p className="mt-2 text-lg leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);

}

const diamond_sponsors = [
	{
		image_path: "dragon_capital.png",
		name: "Dragon Capital",
		description: "Founded in 1994, from an initial base of US$16m,[1] Dragon Capital has offices in Ho Chi Minh City and Hanoi (SSC registered) in Vietnam as well as Bangkok, Hong Kong (SFC registered) and the UK (FCA registered).[2] Its largest fund, Vietnam Enterprise Investments Limited, was launched in 1995 and trades on the Main Market of the London Stock Exchange.[3] Dragon Capital established Vietnam's first domestic asset management company Vietnam Fund Management in 2003 and amalgamated the company into DCVFM in 2020 which is now part of the Dragon Capital Group. Dragon Capital is a shareholder in Ho Chi Minh City Securities Company which began operations in 2003.[4]",
	},

	{
		image_path: "monad.png",
		name: "Monad",
		description: "Founded in 1994, from an initial base of US$16m,[1] Dragon Capital has offices in Ho Chi Minh City and Hanoi (SSC registered) in Vietnam as well as Bangkok, Hong Kong (SFC registered) and the UK (FCA registered).[2] Its largest fund, Vietnam Enterprise Investments Limited, was launched in 1995 and trades on the Main Market of the London Stock Exchange.[3] Dragon Capital established Vietnam's first domestic asset management company Vietnam Fund Management in 2003 and amalgamated the company into DCVFM in 2020 which is now part of the Dragon Capital Group. Dragon Capital is a shareholder in Ho Chi Minh City Securities Company which began operations in 2003.[4]",
	},
	{
		image_path: "polkadot.png",
		name: "Polkadot",
		description: "Founded in 1994, from an initial base of US$16m,[1] Dragon Capital has offices in Ho Chi Minh City and Hanoi (SSC registered) in Vietnam as well as Bangkok, Hong Kong (SFC registered) and the UK (FCA registered).[2] Its largest fund, Vietnam Enterprise Investments Limited, was launched in 1995 and trades on the Main Market of the London Stock Exchange.[3] Dragon Capital established Vietnam's first domestic asset management company Vietnam Fund Management in 2003 and amalgamated the company into DCVFM in 2020 which is now part of the Dragon Capital Group. Dragon Capital is a shareholder in Ho Chi Minh City Securities Company which began operations in 2003.[4]",
	},
];

const strategic_sponsor = [
	{
		image_path: "chain_link.png",
		name: "Chain Link",
		description: "Founded in 1994, from an initial base of US$16m,[1] Dragon Capital has offices in Ho Chi Minh City and Hanoi (SSC registered) in Vietnam as well as Bangkok, Hong Kong (SFC registered) and the UK (FCA registered).[2] Its largest fund, Vietnam Enterprise Investments Limited, was launched in 1995 and trades on the Main Market of the London Stock Exchange.[3] Dragon Capital established Vietnam's first domestic asset management company Vietnam Fund Management in 2003 and amalgamated the company into DCVFM in 2020 which is now part of the Dragon Capital Group. Dragon Capital is a shareholder in Ho Chi Minh City Securities Company which began operations in 2003.[4]",
	},
]

export const OurSponsors = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-dark-blue to-light-blue text-white">
			<div className="container mx-auto py-16 px-8">
				<h1 className="text-6xl font-bold mb-10 text-gradient drop-shadow-lg">Our Strategic Sponsor</h1>
				{strategic_sponsor.map((sponsor, key) => <Sponsor key={key} name={sponsor.name} image_path={sponsor.image_path} description={sponsor.description} />)}
			</div>
			<div className="container mx-auto py-16 px-8">
				<h1 className="text-6xl font-bold mb-10 text-gradient drop-shadow-lg">Our Diamond Sponsors</h1>
				{diamond_sponsors.map((sponsor, key) => <Sponsor key={key} name={sponsor.name} image_path={sponsor.image_path} description={sponsor.description} />)}
			</div>
		</div>
	);
};