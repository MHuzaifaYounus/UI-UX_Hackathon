import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white px-6">
            <div className="container mx-auto flex items-center justify-between h-[90px]">
                {/* Logo */}
                <div className="text-2xl font-bold text-primary_color">
                    Food<span className="text-white">tuck</span>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex space-x-6">
                        <li className="hover:text-primary_color">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-primary_color">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className="hover:text-primary_color">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="hover:text-primary_color">
                            <Link href="/faqs">FAQS</Link>
                        </li>
                        <li className="hover:text-primary_color">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-primary_color">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="hover:text-primary_color">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-6 max-sm:space-x-3">
                    <Link href={"/search"}>
                        <Image
                            src={"/icons/search.svg"}
                            alt="Search Icon"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"/signup"}>
                        <Image
                            src={"/icons/user.svg"}
                            alt="User Icon"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href={"/cart"}>
                        <Image
                            src={"/icons/cart.svg"}
                            alt="Cart Icon"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <button
                        className="block lg:hidden text-primary_color"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="hidden mt-4">
                <ul className="flex flex-col space-y-2 text-center">
                    <li className="hover:text-primary_color">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-primary_color">
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li className="hover:text-primary_color">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-primary_color">
                        <Link href="/faqs">FAQS</Link>
                    </li>
                    <li className="hover:text-primary_color">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-primary_color">
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li className="hover:text-primary_color">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
