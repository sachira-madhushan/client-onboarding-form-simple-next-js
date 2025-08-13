"use client";

import Image from "next/image";
import Select from "react-select";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function OnboardingForm() {
    const [services, setServices] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const serviceOptions = [
        { value: "UI/UX", label: "UI/UX" },
        { value: "Branding", label: "Branding" },
        { value: "Web Dev", label: "Web Development" },
        { value: "Mobile App", label: "Mobile App" },
    ];

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-5xl rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.1)] overflow-hidden 
                      bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full p-6 bg-gray-50 flex flex-col">
                        <div className="relative w-full h-64 md:h-full">
                            <Image
                                src="/client_onboarding.jpg"
                                alt="Left visual"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                        <p className="mt-4 text-center text-gray-600">
                            Welcome to client onboarding
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full p-8 flex items-center">
                        <form className="w-full space-y-5">
                            <h2 className="text-3xl font-bold text-black">Client Onboarding</h2>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="fullname"
                                    type="text"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div className="text-black">
                                <label className="block text-sm font-medium text-gray-700">
                                    Services Interested In
                                </label>
                                <Select
                                    isMulti
                                    options={serviceOptions}
                                    value={services}
                                    onChange={setServices}
                                    placeholder="Select services..."
                                    className="mt-1 hover:cursor-pointer"
                                />
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                    Budget (USD)
                                </label>
                                <input
                                    id="company"
                                    type="number"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    placeholder="1000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Project Start Date
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select start date"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    wrapperClassName="w-full"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center gap-2">
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 hover:cursor-pointer" />
                                    <span className="text-sm text-gray-600">I read and agree to terms & conditions</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white 
                           hover:bg-blue-700 transition hover:cursor-pointer"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}