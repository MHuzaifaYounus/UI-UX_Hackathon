import Image from "next/image";
import React from "react";


const TestimonialCard = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className="relative bg-white text-black rounded-lg mt-20 shadow-lg w-[70%] px-20 py-10 max-sm:w-full max-sm:px-5 max-sm:py-5">
        {/* Profile Image */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 max-sm:w-[90px]  max-sm:h-[90px] ">
          <Image
            src="/img/frame8.svg"
            alt="Profile"
            width={130}
            height={130}
            
          />
        </div>

        {/* Quote Icon */}
        <div className="text-yellow-500 text-4xl text-center mt-12  max-sm:mt-5">❝</div>

        {/* Testimonial Content */}
        <p className="text-center text-gray-600 mt-4 max-sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
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
          <h3 className="text-lg font-semibold">Alamin Hasan</h3>
          <p className="text-sm text-gray-500">Food Specialist</p>
        </div>

    
     
      </div>
    </div>
  );
};

export default TestimonialCard;
