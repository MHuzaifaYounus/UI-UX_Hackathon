import Image from "next/image";
import Link from "next/link";
import React from "react";


const SignInForm = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h1>

                {/* Input Fields */}
                <div className="space-y-4">
                 
                    <div>
                      
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                            <span className="material-icons text-gray-400 mr-2"><Image
                                src="/icons/email.svg"
                                alt="user"
                                width={24}
                                height={24}
                                className="h-5 w-5 mr-2"
                            /></span>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full outline-none text-gray-700"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                            <span className="material-icons text-gray-400 mr-2"><Image
                                src="/icons/pass.svg"
                                alt="user"
                                width={24}
                                height={24}
                                className="h-5 w-5 mr-2"
                            /></span>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="w-full outline-none text-gray-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center my-4">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="h-4 w-4 text-primary_color focus:ring-primary_color border-gray-300 rounded"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 text-sm text-gray-600"
                    >
                        Remember me?
                    </label>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-primary_color text-white py-2 rounded-md shadow-md hover:bg-primary_color transition">
                    Sign In
                </button>

                {/* Forgot Password */}
                <div className="text-end mt-4">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-gray-700"
                    >
                        Forget Password?
                    </Link>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="w-full border-gray-300" />
                    <span className="px-2 text-sm text-gray-500">OR</span>
                    <hr className="w-full border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                        <Image
                            src="/icons/Google.svg"
                            alt="Google"
                            width={20}
                            height={20}
                            className="h-5 w-5 mr-2"
                        />
                        Sign In with Google
                    </button>
                    <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                        <Image
                            src="/icons/Apple.svg"
                            alt="Apple"
                            width={20}
                            height={20}
                            className="h-5 w-5 mr-2"
                        />
                        Sign In with Apple
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
