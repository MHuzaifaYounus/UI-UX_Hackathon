"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { useEffect, useState } from "react"

type TestimonialData = {
  name: string,
  profession: string,
  comment: string,
  profile: string
  rating: number
}

const TestimonialCard = () => {

  const [current, setCurrent] = useState<number>(0)
  const [testimonialData, setTestimonialData] = useState<TestimonialData[]>([])
  useEffect(() => {
    async function getData() {
      try {

        const response: TestimonialData[] = await client.fetch(`*[_type == "testimonial"]{
  name, 
    profession,
    comment,
    "profile":profile.asset->url,
    rating
}`)
        console.log(response)
        setTestimonialData(response)
      } catch (error) {
        console.error("Error While Fetching" , error)
      }


    }
    getData()
  }, [])

  return (
    <Carousel
      className="w-full max-md:w-[85%] m-auto "
    >
      <CarouselContent >
        {testimonialData.map((testimonal, index) => (
          <CarouselItem key={index} >

            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="flex justify-center items-center bg-transparent max-md:p-0">
                <div className="relative bg-white text-black rounded-lg mt-20 shadow-lg w-[70%] px-20 py-10 max-md:w-full max-sm:px-5 max-sm:py-5">
                  {/* Profile Image */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 max-sm:w-[90px]  max-sm:h-[90px] ">
                    <Image
                      src={testimonal.profile}
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
                    {testimonal.comment}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mt-4">
                    <div className="flex space-x-1 text-yellow-400">
                      {[...Array(testimonal.rating)].map((_, i) => (
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

                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold">{testimonal.name}</h3>

                  </div>



                </div>
              </CardContent>
            </Card>

          </CarouselItem>
        ))}
      </CarouselContent>

      <div onClick={() => { setCurrent(prev => (prev === 0 ? prev + (testimonialData.length - 1) : prev - 1)) }}>
        <CarouselPrevious className="bg-transparent" />
      </div>
      <div onClick={() => { setCurrent(prev => (prev === (testimonialData.length - 1) ? prev - (testimonialData.length - 1) : prev + 1)) }} >
        <CarouselNext className="bg-transparent" />
      </div>
      <div className="w-full flex justify-center pt-4">
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialData.map((_, i) => (
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