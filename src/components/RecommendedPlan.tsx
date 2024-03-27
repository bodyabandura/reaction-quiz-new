"use client"

import React, { useContext } from "react";
import { StateManager } from "@/utils/ContextProider";

const RecommendedPlan = () => {

    const { handleNextStep } = useContext(StateManager)

    return (
      <div className="md:px-[10px] mt-[30px] relative  px-0">
          <div className="textDiv ">
              <h1 className="text-[#000] mb-[10px] md:mb-[20px] text-[22px] md:text-[26px] font-semibold text-center">
                  Recommended plan
              </h1>
          </div>
          <div className="w-[20px] md:h-[200px] h-[180px] md:top-[70px] top-[60px] md:left-[18px] left-[7px]  absolute z-10 lineVertical"></div>
          <div className="flex flex-col gap-7">
              <div className="flex  relative z-20 flex-row gap-[10px]">
                  <div
                      className="bg-[#F9B22D] w-[35px] flex justify-center text-[16px] font-bold items-center h-[35px] rounded-full">
                      1
                  </div>
                  <div className="flex-col flex">
                      <div className="text-[14px]  text-[#343434] font-semibold">
                          Invite participants
                      </div>
                      <div className="text-[12px]  text-[#787676] font-normal">
                          We will provide marketing materials
                      </div>
                  </div>
              </div>
              <div className="flex flex-row  relative z-20 mt-[10px] gap-[10px]">
                  <div
                      className="bg-[#FFC55A] w-[35px] flex justify-center text-[16px] font-bold items-center h-[35px] rounded-full">
                      2
                  </div>
                  <div className="flex-col flex">
                      <div className="text-[14px] text-[#343434] font-semibold">
                          Challenge start
                      </div>
                      <div className="text-[12px] text-[#787676] font-normal">
                          Your challenge will start automatically
                      </div>
                  </div>
              </div>
              <div className="flex border-b pb-[20px] mt-[10px] relative  z-20 flex-row gap-[10px]">
                  <div
                      className="bg-[#FFFCF7] w-[35px] flex justify-center text-[16px] font-bold items-center h-[35px] rounded-full">
                      3
                  </div>
                  <div className="flex-col flex mb-8">
                      <div className="text-[14px]  text-[#343434] font-semibold">
                          Announcement
                      </div>
                      <div className=" text-[12px] text-[#787676] font-normal">
                          The app will announce the winners and improvers
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-[14px]  mt-[25px] text-center text-[#979797] font-normal">
              This strategy designed to maintain long-term engagement and maximize program ROI
          </div>
          <div className="px-[30px]">
              <button onClick={handleNextStep} className="uppercase text-[#000] mt-[24px] md:mt-[20px] py-[8px] md:py-[14px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[12px]">
                  Get started
              </button>
          </div>
          <div   onClick={handleNextStep} className=" text-[12px] cursor-pointer md:mt-[15px] mt-[15px] underline text-center text-[#979797] font-normal">
              Create only one-time challenge
          </div>
      </div>
    );
};

export default RecommendedPlan;
