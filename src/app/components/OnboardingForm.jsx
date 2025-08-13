"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./../schemas/ClientOnboardingFormValidation";
import clsx from "clsx";

// Client-only imports
const Select = dynamic(() => import("react-select"), { ssr: false });
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
import "react-datepicker/dist/react-datepicker.css";

export default function OnboardingForm() {
    const [shakeFields, setShakeFields] = useState({});

    const serviceOptions = [
        { value: "UI/UX", label: "UI/UX" },
        { value: "Branding", label: "Branding" },
        { value: "Web Dev", label: "Web Development" },
        { value: "Mobile App", label: "Mobile App" },
    ];

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
        defaultValues: {
            services: [],
            startDate: null,
            budget: undefined,
        },
    });

    const onSubmit = (data) => {
        console.log("Valid form data:", data);
    };

    const onError = (formErrors) => {
        const newShake = {};
        Object.keys(formErrors).forEach((field) => {
            newShake[field] = true;
            setTimeout(() => {
                setShakeFields((prev) => ({ ...prev, [field]: false }));
            }, 500);
        });
        setShakeFields(newShake);
    };

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
                        <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit, onError)}>
                            <h2 className="text-3xl font-bold text-black">Client Onboarding</h2>

                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="fullname"
                                    type="text"
                                    className={clsx(
                                        "mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",
                                        errors.fullName ? "border-red-500" : "border-gray-300",
                                        shakeFields.fullName && "animate-shake"
                                    )}
                                    placeholder="John Doe"
                                    {...register("fullName")}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={clsx(
                                        "mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",
                                        errors.email ? "border-red-500" : "border-gray-300",
                                        shakeFields.email && "animate-shake"
                                    )}
                                    placeholder="you@example.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Company Name */}
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    className={clsx(
                                        "mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",
                                        errors.company ? "border-red-500" : "border-gray-300",
                                        shakeFields.company && "animate-shake"
                                    )}
                                    placeholder="Company Name"
                                    {...register("company")}
                                />
                                {errors.company && (
                                    <p className="text-red-500 text-sm">{errors.company.message}</p>
                                )}
                            </div>

                            {/* Services Interested In */}
                            <div className="text-black">
                                <label className="block text-sm font-medium text-gray-700">
                                    Services Interested In
                                </label>
                                <Controller
                                    name="services"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            isMulti
                                            options={serviceOptions}
                                            value={field.value.map(v => serviceOptions.find(opt => opt.value === v))}
                                            onChange={(val) => field.onChange(val.map(v => v.value))}
                                            placeholder="Select services..."
                                            className={clsx(
                                                "mt-1 hover:cursor-pointer",
                                                errors.services ? "border-red-500" : "border-gray-300",
                                                shakeFields.services && "animate-shake"
                                            )}
                                        />
                                    )}
                                />
                                {errors.services && (
                                    <p className="text-red-500 text-sm">{errors.services.message}</p>
                                )}
                            </div>

                            {/* Budget */}
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                    Budget (USD)
                                </label>
                                <input
                                    id="budget"
                                    type="number"
                                    className={clsx(
                                        "mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",
                                        errors.budget ? "border-red-500" : "border-gray-300",
                                        shakeFields.budget && "animate-shake"
                                    )}
                                    placeholder="1000"
                                    {...register("budget", { valueAsNumber: true })}
                                />
                                {errors.budget && (
                                    <p className="text-red-500 text-sm">{errors.budget.message}</p>
                                )}
                            </div>

                            {/* Project Start Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Project Start Date
                                </label>
                                <Controller
                                    name="startDate"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            selected={field.value}
                                            onChange={field.onChange}
                                            minDate={new Date()}
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText="Select start date"
                                            className={clsx(
                                                "mt-1 w-full rounded-lg border px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                errors.startDate ? "border-red-500" : "border-gray-300",
                                                shakeFields.startDate && "animate-shake"
                                            )}
                                            wrapperClassName="w-full"
                                        />
                                    )}
                                />
                                {errors.startDate && (
                                    <p className="text-red-500 text-sm">{errors.startDate.message}</p>
                                )}
                            </div>

                            {/* Accept Terms */}
                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className={clsx(
                                            "h-4 w-4 rounded border-gray-300 hover:cursor-pointer",
                                            errors.terms ? "border-red-500" : "border-gray-300",
                                            shakeFields.terms && "animate-shake"
                                        )}
                                        {...register("terms")}
                                    />
                                    <span className="text-sm text-gray-600">I read and agree to terms & conditions</span>
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700 transition hover:cursor-pointer"
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
