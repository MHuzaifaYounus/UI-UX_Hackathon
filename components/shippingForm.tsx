"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ShippingForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        city: "",
        zipCode: "",
        address1: "",
        address2: "",
        billingSameAsShipping: false,
    });
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Custom validation logic (optional)
        if (!formData.firstName) {
            alert("First name is required.");
            return;
        }
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (formData.phone && !formData.phone.match(/^\d{10}$/)) {
            alert("Phone number must be 10 digits.");
            return;
        }
        if (!formData.zipCode.match(/^\d{5}$/)) {
            alert("Zip code must be 5 digits.");
            return;
        }
        console.log(formData);
        setIsSubmit(true)
    };

    return (
        <div className="lg:col-span-2  p-6 rounded-lg shadow-lg">
            {isSubmit ?
                <div className="p-4 flex flex-col items-center">
                    <h1 className="text-xl  font-semibold text-green-500">Order Placed Successfully</h1>
                    <h1 className="text-3xl text-center font-semibold pt-5">Our <span className="text-primary_color">Chef</span> is Cooking for You</h1>
                    <Image
                        src={"/img/cooking.gif"}
                        alt="cooking food gif"
                        width={400}
                        height={400}
                    />
                </div> :
                <div>
                    <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                    <form
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-6 max-md:gap-2"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number (10 digits)"
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            pattern="\d{10}"
                            title="Phone number must be 10 digits."
                        />
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                        />
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            required
                        >
                            <option value="">Choose country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                        </select>
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            required
                        >
                            <option value="">Choose city</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Zip code (5 digits)"
                            className="border p-2 rounded w-full max-md:col-span-2 max-md:p-1 max-md:h-12"
                            pattern="\d{5}"
                            title="Zip code must be 5 digits."
                            required
                        />
                        <input
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            placeholder="Address 1"
                            className="border p-2 rounded w-full col-span-2 max-md:p-1 max-md:h-12"
                            required
                        />
                        <input
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            placeholder="Address 2"
                            className="border p-2 rounded w-full col-span-2 max-md:p-1 max-md:h-12"
                        />
                        <div className="mt-6 w-full col-span-2 max-md:p-1 max-md:h-12">
                            <label className="flex flex-col">
                                <h2 className="font-bold text-xl">Billing Address</h2>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="billingSameAsShipping"
                                        checked={formData.billingSameAsShipping}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <span>Same as shipping address</span>
                                </div>
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-6 max-sm:flex-col">
                            <button
                                type="button"
                                className="bg-white w-[48%] max-sm:w-full h-[58px] text-black px-6 py-2 hover:bg-gray-500 border-2 border-gray-300 max-md:h-[40px] flex justify-center items-center"
                            >
                                <Link href="/cart">&lt; Back to cart</Link>
                            </button>
                            <button
                                type="submit"
                                className="bg-primary_color w-[48%] max-sm:w-full h-[58px] max-md:h-[40px] text-white px-6 py-2 max-sm:mt-5 hover:bg-primary_color
                                flex justify-center items-center"
                            >
                                Place an Order &rarr;
                            </button>
                        </div>
                    </form>



                </div>}
        </div>
    );
}

export default ShippingForm;
