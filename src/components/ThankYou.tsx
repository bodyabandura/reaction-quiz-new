"use client"

import { StateManager } from "@/utils/ContextProider";
import { useContext } from "react";

function ThankYou() {

  const { answers } = useContext(StateManager)
  console.log(answers);

  return (
    <div className="h-[50vh] flex flex-col justify-evenly">
      <div className="flex flex-col items-center">
        <h1 className="text-semibold text-2xl">Thank you</h1>
        <p className="text-[#979797]">Our team is looking forward to meeting you!</p>
      </div>
      <div className="px-[20px]">
        <button
          className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
        >
          <a href="https://www.reaction-club.com/">Visit Reaction’s website</a>
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
