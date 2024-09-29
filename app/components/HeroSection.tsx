import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
	return (
		<>
			<div className="w-full grid grid-cols-2">
				<Image
					src={"/cubes.png"}
					alt="hero-section"
					width={1000}
					height={1000}
				/>
			</div>
		</>
	)
}
