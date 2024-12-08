import Image from "next/image";
import React from "react";
import SocialMediaIcons from "./socialIcons";


const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 max-lg:w-full">
            <div className="mx-auto px-4 max-lg:px-0 w-[80%] max-lg:w-[90%]">
                <div className="support w-[90%] m-auto flex justify-between max-lg:w-full pb-20 border-b-2 border-primary_color max-lg:flex-col max-lg:items-center max-lg:text-center ">
                    <div className="">
                        <h2 className=" text-3xl font-bold">
                            <span>St</span>ill You Need Our Support?
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Dont wait; make a smart & logical quote here. Its pretty easy.
                        </p>
                    </div>
                    <div className="mt-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full md:w-auto p-2 rounded-s-md text-white bg-primary_color"
                        />
                        <button className="mt-2 md:mt-0  bg-white text-primary_color py-2 px-4 rounded-e-md ">
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-8 pt-20">

                    {/* About Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-white font-bold text-2xl">About Us</h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Corporate clients and leisure travelers have been relying on
                            GroundLink for dependable, safe, and professional chauffeured car
                            service in major cities across the world.
                        </p>
                        <div className="mt-4">
                            <div className="flex items-center text-gray-400">
                                <div className="bg-primary_color p-1 rounded-sm mr-2 w-[78px] h-[72px] flex justify-center items-center">
                                    <Image
                                        src={"/icons/clockwise.svg"}
                                        alt="Search Icon"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="">
                                    <h1 className="font-medium">Opening Hours:</h1>
                                    <p>Mon - Sat (8:00 - 6:00)</p>
                                    <p className="text-gray-400 mt-1">Sunday - Closed</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-white font-bold text-2xl">Useful Links</h2>
                        <ul className="mt-4 text-gray-400 text-lg space-y-4">
                            <li>About</li>
                            <li>News</li>
                            <li>Partners</li>
                            <li>Team</li>
                            <li>Menu</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-white font-bold text-2xl">Help?</h2>
                        <ul className="mt-4 text-gray-400 text-lg space-y-4 text-center">
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Reporting</li>
                            <li>Documentation</li>
                            <li>Support Policy</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="text-white font-bold text-2xl">Recent Post</h2>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-center">
                                <div className="w-16 h-14 bg-gray-500 rounded-md mr-4">
                                    <Image
                                        src={"/img/frame101.svg"}
                                        alt="Search Icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">20 February 2022</p>
                                    <p className="text-white">Keep Your Business</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="w-16 h-14 bg-gray-500 rounded-md mr-4">
                                    <Image
                                        src={"/img/frame101.svg"}
                                        alt="Search Icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">20 February 2022</p>
                                    <p className="text-white">Keep Your Business</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="w-16 h-14 bg-gray-500 rounded-md mr-4">
                                    <Image
                                        src={"/img/frame101.svg"}
                                        alt="Search Icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">20 February 2022</p>
                                    <p className="text-white">Keep Your Business</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


            <div className="mt-10 bg-[#4F4F4F] h-[99px] max-md:h-[120px] max-md:pt-5 max-md:pb-32">
                <div className="w-[80%] flex items-center justify-between m-auto h-full max-md:flex-col">
                    <h1 className="text-white max-md:pb-5">Copyright © 2022 by Ayeman. All Rights Reserved.</h1>
                    <SocialMediaIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
