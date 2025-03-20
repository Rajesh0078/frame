'use client'
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FormInput = ({
    label = "",
    type = "text",
    register,
    name = "",
    placeholder = "",
    Icon,
    error = "",
    className = '',
    id = ''
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col w-full select-none">
            <label htmlFor={id} className="text-base text-dark">{label}</label>
            <div className="w-full relative">
                <input
                    type={type === "password" && showPassword ? "text" : type}
                    placeholder={placeholder}
                    id={id}
                    {...register(name)}
                    autoComplete="off"
                    className={`${className} ${error ? "border border-red-500" : ""}`}
                />
                {type === "password" ? (
                    <div
                        className="bg-primary/60 aspect-square min-h-[42px] rounded-[5px] absolute top-0 right-0 flex justify-center items-center cursor-pointer text-[21px]"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible className="text-white" />
                        ) : (
                            <AiOutlineEye className="text-white" />
                        )}
                    </div>
                ) : (
                    Icon && (
                        <div className="bg-primary/60 aspect-square min-h-[42px] rounded-[5px] absolute top-0 right-0 flex justify-center items-center">
                            <Icon className="text-base text-white" />
                        </div>
                    )
                )}
            </div>
            {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
        </div>
    );
};

export default FormInput;