import Image from "next/image";
import { Great_Vibes } from "next/font/google"
import SideIcons from "@/components/sideicons";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import TestimonialCard from "@/components/testimonal";
import Link from "next/link";
import MenuSection from "@/components/MenuSection";


const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] })

export default async function Home() {


  return (
    <div className="bg-black">
      <div className="hero w-[80%] relative flex justify-between items-center pt-10 pb-10 m-auto max-lg:w-[90%] max-lg:flex-col ">

        <Image
          className="absolute top-0 left-0 opacity-30"
          src={"/img/heroback.png"}
          alt="Search Icon"
          width={1920}
          height={950}
          loading="lazy"
        />
        <div className="left w-[472px] min-h-[352px] text-white z-10 max-sm:w-[90%] pl-10 max-lg:pl-2 relative">
          <SideIcons />


          <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
            Its Quick & Amusing!
          </div>


          <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
            <span className="text-primary_color">Th</span>e Art of  speed food Quality
          </h1>


          <p className="text-gray-400 mt-4 max-sm:text-sm">
          Experience flavors that delight, crafted with care to satisfy every craving and taste.
          </p>


          <button className="bg-primary_color text-white mt-6 px-6 py-2 rounded-[30px] hover:bg-primary_color transition">
            <Link href={"/menu"}>See Menu</Link>
          </button>

        </div>
        <div className="right z-20 ">

          <Image

            src={"/img/heroright.png"}
            alt="Search Icon"
            width={877}
            height={670}
                loading="lazy"
          />
        </div>

      </div>
      <div className="section2 pt-10 pb-10 flex justify-between items-center w-[80%] max-lg:w-[95%] max-lg:flex-col m-auto max-xl:w-[90%]">

        <div className="left w-[472px] min-h-[562px] flex flex-col justify-between text-white z-10 max-sm:w-[90%] pl-10 max-lg:pl-2 relative  max-md:w-full max-sm:[&_p]:text-sm max-lg:w-[75%]">



          <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
            About Us
          </div>


          <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
            <span className="text-primary_color">We</span> Create the best
            foody product

          </h1>


          <p className="text-gray-400 mb-4">
          Indulge in culinary excellence with our handcrafted recipes, designed to bring out the best in every bite. From fresh ingredients to innovative flavors, we serve only the finest.
          </p>
          

          <ul className="space-y-3">

            <li className="flex items-start space-x-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-300">Our passion for creating flavorful dishes is matched by our dedication to providing a delightful experience that keeps you coming back for more.</p>
            </li>


            <li className="flex items-start space-x-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-300">Every dish is crafted with precision and care, ensuring you enjoy nothing but the best. </p>
            </li>


            <li className="flex items-start space-x-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-300">Delivering premium quality food with unmatched taste and presentation. </p>
            </li>
          </ul>


          <button className="bg-primary_color text-white mt-6 px-6 py-2 rounded-[30px] hover:bg-primary_color transition w-[190px] h-[60px] max-sm:h-[40px] max-sm:w-[130px]">
            <Link href={"/about"}>Read More</Link>
          </button>

        </div>
        <div className="right grid w-[40%] grid-cols-2 grid-rows-2 gap-4 max-lg:pt-20 max-lg:w-[75%] max-md:w-full min-h-[600px] pt-20 max-md:min-h-[200px]">

          <div className="col-span-2">
            <Image
              src={"/img/frame21.svg"}
              alt="Search Icon"
              width={660}
              height={330}
                  loading="lazy"
            />
          </div>
          <div className="">
            <Image
              src={"/img/frame22.svg"}
              alt="Search Icon"
              width={322}
              height={194}
                  loading="lazy"
            />
          </div>
          <div className="">
            <Image
              src={"/img/frame23.svg"}
              alt="Search Icon"
              width={322}
              height={194}
                  loading="lazy"
            />
          </div>

        </div>

      </div>
      <div className="section3 w-[80%] min-h-[489px] flex flex-col justify-between pb-10 pt-10 text-white m-auto items-center">
        <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
          Food Category
        </div>
        <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
          <span className="text-primary_color">Our</span> Food Categories

        </h1>
        <div className="flex w-full flex-wrap justify-between items-center pt-20 max-md:justify-center">
          <div className="w-[305px] h-[328px] rounded-md mt-8">
            <Image
              src={"/img/frame31.svg"}
              alt="Search Icon"
              width={305}
              height={328}
                  loading="lazy"
            />
          </div>
          <div className="w-[305px] h-[328px] rounded-md mt-8">
            <Image
              src={"/img/frame32.svg"}
              alt="Search Icon"
              width={305}
              height={328}
                  loading="lazy"
            />
          </div>
          <div className="w-[305px] h-[328px] rounded-md mt-8">
            <Image
              src={"/img/frame33.svg"}
              alt="Search Icon"
              width={305}
              height={328}
                  loading="lazy"
            />
          </div>
          <div className="w-[305px] h-[328px] rounded-md mt-8">
            <Image
              src={"/img/frame34.svg"}
              alt="Search Icon"
              width={305}
                  loading="lazy"
              height={328}
            />
          </div>
        </div>

      </div>

      <div className="section4 pt-10 pb-10 flex justify-between items-center w-[80%] max-lg:w-[95%] max-lg:flex-col m-auto max-xl:w-[90%]">


        <div className="grid grid-cols-5 grid-rows-8 gap-4 pt-10 pb-10 w-[590px] max-sm:w-full">

          <div className="col-span-3 row-span-4">
            <Image
              src={"/img/frame41.svg"}
              alt="Search Icon"
              width={362}
              height={356}
                  loading="lazy"
            />
          </div>

          <div className="col-span-2 row-span-4 flex items-end">
            <Image
              src={"/img/frame42.svg"}
              alt="Search Icon"
              width={281}
              height={231}
                  loading="lazy"
            />
          </div>

          <div className="col-span-2 row-span-4">
            <Image
              src={"/img/frame43.svg"}
              alt="Search Icon"
              width={244}
              height={306}
                  loading="lazy"
            />
          </div>

          <div className="col-span-2 row-span-3">
            <Image
              src={"/img/frame44.svg"}
              alt="Search Icon"
              width={221}
              height={226}
                  loading="lazy"
            />
          </div>

          <div className="col-span-1 row-span-2">
            <Image
              src={"/img/frame45.svg"}
              alt="Search Icon"
              width={161}
              height={168}
                  loading="lazy"
            />
          </div>

          <div className="col-span-1 row-span-2">
            <Image
              src={"/img/frame46.svg"}
              alt="Search Icon"
              width={161}
                  loading="lazy"
              height={168}
            />
          </div>
        </div>

        <div className="right w-[40%] min-h-[562px] flex flex-col justify-between text-white z-10 max-sm:w-[90%]  max-lg:pl-2 relative  max-md:w-full max-sm:[&_p]:text-sm max-lg:w-[75%]">

          <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
            Why Choose Us
          </div>
          <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
            <span className="text-primary_color">Ex</span>rta ordinary taste
            And Experienced
          </h1>
          <p className="text-gray-400 mb-4">
          Delight your senses with exceptional flavors crafted by skilled hands. Our culinary expertise ensures every bite is a masterpiece, blending tradition and innovation to perfection.
          </p>
          <div className="flex w-[400px] max-sm:w-[90%] m-auto justify-between ml-[-20px]">
            <Card className="bg-transparent text-white border-none">
              <CardHeader>
                <div className="bg-primary_color w-[62px] h-[60px] max-sm:p-1 max-sm:h-[40px] max-sm:w-[42px] rounded-lg flex justify-center items-center">
                  <Image
                    src={"/icons/Hamburger.svg"}
                    alt="Search Icon"
                    width={56}
                    height={56}
                        loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h1 className="text-lg text-center max-sm:text-xs">Fast Food</h1>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-white border-none">
              <CardHeader>
                <div className="bg-primary_color w-[62px] h-[60px] max-sm:p-1 max-sm:h-[40px] max-sm:w-[42px] rounded-lg flex justify-center items-center">
                  <Image
                    src={"/icons/Cookie.svg"}
                    alt="Search Icon"
                    width={56}
                    height={56}
                        loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h1 className="text-lg text-center max-sm:text-sm">Lunch</h1>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-white border-none">
              <CardHeader>
                <div className="bg-primary_color w-[62px] h-[60px] max-sm:p-1 max-sm:h-[40px] max-sm:w-[42px] rounded-lg flex justify-center items-center">
                  <Image
                    src={"/icons/Wine.svg"}
                    alt="Search Icon"
                    width={56}
                    height={56}
                        loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h1 className="text-lg text-center max-sm:text-sm">Drinks</h1>
              </CardContent>
            </Card>
          </div>
          <div className="w-[374px] h-[93px] bg-white rounded-md flex justify-evenly items-center text-black relative max-sm:w-full" >
            <div className="h-full w-3 bg-primary_color absolute left-0 rounded-s-md" />
            <h1 className="text-5xl font-bold text-primary_color">20+</h1>
            <div className="">
              <h3 className="text-xl">Years of</h3>
              <h2 className="font-bold text-2xl">Experience</h2>
            </div>
          </div>





        </div>
      </div>

      <div className="section5 w-full flex justify-center items-center min-h-[468px] relative frame5_bg  py-10 ">
        <div className="w-full h-full bg-black opacity-90 absolute top-0"></div>
        <div className="container w-[80%] z-10 flex justify-between max-sm:justify-center flex-wrap ">
          <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
            <Image
              src={"/icons/icon51.svg"}
              alt="Search Icon"
              width={120}
              height={120}
                  loading="lazy"
            />
            <h1 className="font-bold text-2xl max-sm:text-lg">Professional Chefs</h1>
            <h2 className="font-bold text-4xl max-sm:text-xl">420</h2>
          </div>
          <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
            <Image
              src={"/icons/icon52.svg"}
              alt="Search Icon"
              width={120}
              height={120}
                  loading="lazy"
            />
            <h1 className="font-bold text-2xl max-sm:text-lg">Items of food</h1>
            <h2 className="font-bold text-4xl max-sm:text-xl">320</h2>
          </div>
          <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
            <Image
              src={"/icons/icon53.svg"}
              alt="Search Icon"
              width={120}
              height={120}
                  loading="lazy"
            />
            <h1 className="font-bold text-2xl max-sm:text-lg">Years of experience</h1>
            <h2 className="font-bold text-4xl max-sm:text-xl">20+</h2>
          </div>
          <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
            <Image
              src={"/icons/icon54.svg"}
              alt="Search Icon"
              width={120}
              height={120}
                  loading="lazy"
            />
            <h1 className="font-bold text-2xl max-sm:text-lg">Happy Customers</h1>
            <h2 className="font-bold text-4xl max-sm:text-xl">220</h2>
          </div>

        </div>
      </div>

      {/* section 6 */}
      <MenuSection />

      <div className="section9 w-full flex justify-center items-center min-h-[468px] relative frame9_bg  py-10 mt-20 ">
        <div className="w-full h-full bg-black opacity-50 absolute top-0"></div>
        <div className="w-[70%] flex justify-end max-sm:w-full max-sm:justify-center">

          <div className="text w-[472px] min-h-[352px] text-white z-10 max-sm:w-[90%] flex flex-col justify-between items-end text-end max-sm:text-center max-sm:items-center ">

            <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl ${greatVibes.className}`}>
              Restaurant Active Process
            </div>


            <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
              <span className="text-primary_color">We</span> Document Every Food
              Bean Process untile it is saved
            </h1>


            <p className="text-gray-400 mt-4 max-sm:text-sm">
            From sourcing the finest ingredients to crafting each dish with care, our process ensures quality and freshness at every stage.
            </p>

            <div className="flex items-center">
              
              <div className="flex items-center pl-5">
                <div className="w-[60px] h-[60px] rounded-full bg-primary_color flex justify-center items-center">
                  <Image
                    src={"/icons/Play.svg"}
                    alt="Search Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h1 className="font-bold pl-5 max-sm:text-xs">Play Now</h1>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="section8 w-[80%] min-h-[489px] flex flex-col justify-between pb-10 pt-10 text-white m-auto">
        <div className={`text-primary_color text-3xl mb-2 max-sm:text-2xl text-start ${greatVibes.className}`}>
          Testimonals
        </div>
        <h1 className="text-4xl font-bold leading-tight max-sm:text-3xl text-start">
          <span className="text-primary_color">Wh</span>at our client are saying

        </h1>

        <TestimonialCard />




      </div>

  

    </div>
  );
}
