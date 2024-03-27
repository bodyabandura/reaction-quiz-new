"use client"

import React, { useContext, useState } from "react";
import { StateManager } from "@/utils/ContextProider";
import { toast, Toaster } from 'sonner';
// import { useMutation } from "@apollo/client";
// import { SAVE_QUIZ_MUTATION } from "@/utils/cms/mutations/quiz";
// import client from "@/utils/apolloClient";
// import { airtableClient } from "@/utils/airtableClient";
// import { AppContext } from "@/utils/ContextProvider";


const User = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { handleNextStep, setAnswers } = useContext(StateManager)

    const isValidEmail = (email: string) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNextClick = async () => {
        if (firstName === "" && lastName === "" && !isValidEmail(email)) {
            toast.error('Fill all the Details');
        } else if (firstName === "") {
            toast.error('Write First Name');
        } else if (lastName === "") {
            toast.error('Write Last Name');
        } else if (!isValidEmail(email)) {
            toast.error('Write Correct Email');
        } else {
            setAnswers(prev => ({
                ...prev,
                admin_detail: {
                    ...prev.admin_detail,
                    first_Name: firstName,
                    last_Name: lastName,
                    email: email
                }
            }))
            handleNextStep();
        }
    };


    return (
        <div>
            <div className="flex justify-center mt-[30px] items-center">
                <h1 className="text-[#000] mb-[10px] md:text-[24px] text-[22px] font-semibold text-center">
                    Enter your details to get your recommended plan
                </h1>
            </div>
            <div className="w-full flex px-[30px]   gap-[10px] mt-[20px] flex-row ">
                <div className='w-[50%]'>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 p-2 border bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
                    />
                </div>
                <div className='w-[50%]'>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 p-2 bg-[#EFF3F6] border border-[#EFF3F6]  rounded-md w-full"
                    />
                </div>
            </div>
            <div className="px-[30px]">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-[10px] p-2 border  bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
                />
            </div>

            <div>
                <Toaster richColors position={"top-center"} closeButton={true}/>
            </div>
            <div className="px-[30px]">
                <button
                    onClick={() => handleNextClick()}
                    className="uppercase  text-[#000] mt-[144px] py-[12px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default User;
