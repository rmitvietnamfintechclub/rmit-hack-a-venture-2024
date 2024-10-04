import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const PartnerSection = () => {
  return (
    <div className='bg-black w-full mx-auto flex flex-col items-center justify-center'>
      <h1
        className={`text-[45px] lg:text-[57px] text-white font-semibold px-[40px]`}
      >
        Our Partners
      </h1>
      <p className="text-[#9CA3AF] lg:text-[20px] mb-6">BLOCKCHAIN AND CRYPTOCURRENCY</p>
      <CarouselSize />
    </div>
  )
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/12 lg:basis-1/6 ">
            <div className="p-1 ">
              <Card className='rounded-full '>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
