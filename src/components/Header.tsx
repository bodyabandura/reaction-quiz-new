"use client"

import { StateManager } from "@/utils/ContextProider";
import Image from "next/image";
import { useContext } from "react";

function Header() {
  const { currentStep, setCurrentStep, percentage } = useContext(StateManager)

  return (
    <div className="mb-16">
      {![0, 5, 12, 18].includes(currentStep) ? (<>
        <div className="flex items-end justify-between mb-5">
          <Image
            src="step_back.svg"
            width={15}
            height={15}
            alt="image"
            onClick={() => setCurrentStep(prev => prev - 1)}
          />
          <Image src="logo.svg" width={100} height={40} alt="image"/>
          <p><span className="text-[#3C8AF0]">{currentStep}</span>/20</p>
        </div>
        <div className="w-full rounded mx-auto h-[5px] bg-[#E1E1E1]">
          <div
            className='bg-[#3C8AF0] h-full rounded'
            style={{ width: `${percentage}%` }}
          />
        </div>
      </>) : (
        <div className="flex justify-center">
          <Image
            src="logo.svg"
            width={100}
            height={40}
            alt="image"
          />
        </div>
      )
      }
    </div>
  );
}

export default Header;
