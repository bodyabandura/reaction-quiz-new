"use client"

import { StateManager } from "@/utils/ContextProider";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import { toast, Toaster } from "sonner";

const options = ["Quiz night | 60mins ", "Chair stretch | 15mins", "Coffee break | 15 mins", "Meditation Class | 30 mins", "Not sure for now", "I have other idea"]

function Events() {

  const [chosenOptions, setChosenOptions] = useState<string[]>([])
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const handleChosenOptions = (option: string) => {

    const newSelected = [...chosenOptions];
    const selectedIndex = newSelected.indexOf(option);

    if (selectedIndex === -1) {
      newSelected.push(option);
    } else {
      newSelected.splice(selectedIndex, 1);
    }

    setAnswers(prev => ({ ...prev, events: newSelected }))
    setChosenOptions(newSelected);
  }

  const handleNextClick = () => {
    if (chosenOptions.length >= 1 && chosenOptions.length <= 3) {
        handleNextStep();
    } else if (chosenOptions.length > 3) {
        toast.error('You are allowed to select maximum 3 areas.');
    } else {
        toast.error('Please select at least 1 areas.');
    }
};

  return (
    <div className="flex flex-col items-center overflow-y-scroll">
      <h1 className="text-2xl text-center">Recommanded</h1>
      <p className="text-2xl font-semibold mb-2">one-off hosted events</p>
      <p className="mb-10 text-[#979797]">You can change your selection later</p>
      <div className="flex flex-col w-[100%] items-center overflow-scroll h-[50vh]">
        {options.map(option => (
          <Fragment key={option}>
            <div
              className={`flex justify-between py-6 w-[80%] p-4 mb-3 rounded-xl ${chosenOptions?.includes(option) ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
              onClick={() => handleChosenOptions(option)}
            >
              <span className="font-semibold">{option}</span>
              {chosenOptions?.includes(option) && (
                <Image
                  src={'chosen.svg'}
                  width={20}
                  height={20}
                  alt="image"
                />
              )}
            </div>
          </Fragment>
        ))}
      </div>
      <div>
        <Toaster richColors position={"top-center"} closeButton={true}/>
      </div>
      <div className="w-[100%] px-[20px] pb-[40px]">
          <button
            onClick={() => handleNextClick()}
            className="uppercase flex items-center justify-center mt-[30px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[14px] md:text-[18px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]"
          >
            Next
          </button>
        </div>
    </div>
  );
}

export default Events;
