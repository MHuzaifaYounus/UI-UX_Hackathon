import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const SideIcons = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-black py-4 h-[492px] absolute left-[-30px] top-[-100px] max-lg:h-full max-lg:top-[-30px] max-sm:left-[-25px] max-sm:h-[90%]">
            {/* Top Line */}
            <div className="h-16 border-l border-gray-600"></div>

            {/* Social Icons */}
            <div className="flex flex-col items-center space-y-6">
                {/* Facebook Icon */}
                <a
                    href="#"
                    className="text-white hover:text-gray-400 transition duration-300"
                >
                    <FaFacebookF />
                </a>

                {/* Twitter Icon */}
                <a
                    href="#"
                    className="text-orange-400 hover:text-orange-500 transition duration-300"
                >
                    <FaTwitter />
                </a>

                {/* Pinterest Icon */}
                <a
                    href="#"
                    className="text-white hover:text-gray-400 transition duration-300"
                >
                    <FaPinterestP />
                </a>
            </div>

            {/* Bottom Line */}
            <div className="h-16 border-l border-gray-600"></div>
        </div>

    )
}

export default SideIcons