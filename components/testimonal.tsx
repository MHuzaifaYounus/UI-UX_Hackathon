"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useState } from "react"

type TestimonialData = {
  name: string,
  profession: string,
  comment: string,
  profile: string
}
const testimonialData: TestimonialData[] = [
  {
    name: "Alamin Hasan",
    profession: "Food Specialist",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diampellentesque bibendum non dui volutpat fringilla bibendum. Urna, elitaugue urna, vitae feugiat pretium donec id elementum. Ultrices mattissed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    profile: "/img/frame8.svg"
  },
  {
    name: "Sara Javed",
    profession: "Marketing Expert",
    comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tincidunt sem non orci volutpat, sit amet volutpat justo vestibulum.",
    profile: "/img/comment1.svg"
  },
  {
    name: "Carlos Mendez",
    profession: "Software Engineer",
    comment: "Integer posuere turpis sit amet mi gravida, non efficitur nisl mollis. Aenean fringilla purus ut nulla maximus, at tempor metus tincidunt. Cras scelerisque lectus et tincidunt malesuada. Morbi sed interdum orci. Mauris interdum tortor vel libero dignissim.",
    profile: "/img/comment2.svg"
  },
  {
    name: "Emily Carter",
    profession: "UI/UX Designer",
    comment: "Donec eget magna a nunc interdum laoreet. Curabitur aliquet vehicula dolor, ac tempor ante pretium sit amet. In non dui feugiat, tincidunt nulla sed, vulputate metus. Nulla feugiat enim sapien, ut gravida libero tincidunt sit amet.",
    profile: "/img/comment3.svg"
  }
];


const TestimonialCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const [current, setCurrent] = useState<number>(0)

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-md:w-[85%] m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 max-md:p-0">
              <Card className="bg-transparent border-none">
                <CardContent className="flex justify-center items-center bg-transparent max-md:p-0">
                  <div className="relative bg-white text-black rounded-lg mt-20 shadow-lg w-[70%] px-20 py-10 max-md:w-full max-sm:px-5 max-sm:py-5">
                    {/* Profile Image */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 max-sm:w-[90px]  max-sm:h-[90px] ">
                      <Image
                        src={testimonialData[index].profile}
                        alt="Profile"
                        width={130}
                        height={130}
                        className="rounded-full"

                      />
                    </div>

                    {/* Quote Icon */}
                    <div className="text-yellow-500 text-4xl text-center mt-12  max-sm:mt-5">❝</div>

                    {/* Testimonial Content */}
                    <p className="text-center text-gray-600 mt-4 max-sm:text-sm">
                      {testimonialData[index].comment}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center mt-4">
                      <div className="flex space-x-1 text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M12 .587l3.668 7.429 8.211 1.194-5.938 5.789 1.4 8.183-7.341-3.86-7.34 3.86 1.399-8.183-5.939-5.789 8.211-1.194z" />
                          </svg>
                        ))}
                        {/* Empty Star */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-semibold">{testimonialData[index].name}</h3>
                      <p className="text-sm text-gray-500">{testimonialData[index].profession}</p>
                    </div>



                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div onClick={() => { setCurrent(prev => (prev === 0 ? prev + 3 : prev - 1)) }}>
        <CarouselPrevious className="bg-transparent" />
      </div>
      <div onClick={() => {setCurrent(prev => (prev === 3 ? prev - 3 : prev + 1)) }} >
        <CarouselNext className="bg-transparent" />
      </div>

      <div className="w-full flex justify-center pt-20">
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === current ? "bg-yellow-500" : "bg-yellow-900"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </Carousel>
  )
}
export default TestimonialCard;