"use client"

import React, { useContext } from "react";
import { StateManager } from "@/utils/ContextProider";

const RecommendedPlan = () => {

    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1).toLocaleString('default', { month: 'long' })

    const { handleNextStep } = useContext(StateManager)

    return (
      <div className="md:px-[10px] mt-[30px] relative  px-0">
          <div className="textDiv ">
              <h1 className="text-[#000] mb-[10px] md:mb-[20px] text-[22px] md:text-[26px] font-semibold text-center">
                  Recommended plan
              </h1>
          </div>
          <div className="w-[20px] h-[100%] md:top-[70px] top-[60px] md:left-[18px] left-[7px]  absolute z-10 bg-gradient-to-b from-yellow-400 via-white to-transparent"/>
          <div className="flex flex-col gap-7">
              <div className="flex  relative z-20 flex-row gap-[10px]">
                  <div className="bg-[#F9B22D] w-[35px] flex justify-center text-[16px] font-bold items-center h-[35px] rounded-full">
                      1
                  </div>
                  <div className="flex-col flex">
                      <div className="text-[12px]  text-[#787676] font-normal">
                        {currentMonth}
                      </div>
                      <div className="text-[14px]  text-[#343434] font-semibold">
                        1 x Ongoing activity
                      </div>
                      <div className="text-[12px]  text-[#787676] font-normal">
                        {'(i.e. step challenge, volunteering, score prediction)'}
                      </div>
                  </div>
              </div>
              <div className="flex flex-row  relative z-20 mt-[10px] gap-[10px]">
                  <div
                      className="bg-[#FFC55A] w-[35px] flex justify-center text-[16px] font-bold items-center h-[35px] rounded-full">
                      2
                  </div>
                  <div className="flex-col flex">
                      <div className="text-[12px] text-[#787676] font-normal">
                      {nextMonth}
                      </div>
                      <div className="text-[14px] text-[#343434] font-semibold">
                        2 x One off event
                      </div>
                      <div className="text-[12px] text-[#787676] font-normal">
                        {'(i.e. quiz night, coffee break, morning meditation)'}
                      </div>
                  </div>
              </div>
              <div className="flex border-b pb-[20px] mt-[10px] relative  z-20 flex-row gap-[10px]">
                  <div
                      className="bg-[#FFFCF7] w-[35px] flex justify-center text-[16px] font-bold items-center h-[35px] rounded-full">
                      +
                  </div>
                  <div className="flex-col flex mb-8">
                      <div className="text-[14px]  text-[#343434] font-semibold">
                        Motivate with rewards
                      </div>
                      <div className=" text-[12px] text-[#787676] font-normal">
                        Boost participation & engagement
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-[14px]  mt-[25px] text-center text-[#979797] font-normal">
              This strategy designed to maintain long-term engagement and maximize program ROI
          </div>
          <div className="px-[30px]">
              <button
                onClick={handleNextStep}
                className="uppercase text-[#000] mt-[24px] md:mt-[20px] py-[8px] md:py-[14px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[12px]"
              >
                Select activities
              </button>
          </div>
      </div>
    );
};

export default RecommendedPlan;
