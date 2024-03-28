"use client";
import React, { useContext, useState } from "react";
import { StateManager } from "@/utils/ContextProider";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { Toaster, toast } from "sonner";

const CreateChallange = () => {

  const { handleNextStep } = useContext(StateManager);
  const [isEventScheduled, setEventScheduled] = useState(false)

  useCalendlyEventListener({
    onEventScheduled: () => setEventScheduled(!isEventScheduled)
  });

  const handleNextClick = () => {
    isEventScheduled ? handleNextStep() : toast.error('Please schedule the onboarding meeting');
  };

  return (
    <div>
      <InlineWidget
        url="https://calendly.com/d/ck53-7qc-f4n/team-building-plan"
        styles={{height: '80vh'}}
      />
      <div className="px-[20px]">
        <button
          onClick={handleNextClick}
          className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
        >Next</button>
      </div>
      <Toaster richColors position={"top-center"} closeButton={true}/>
    </div>
  );
};

export default CreateChallange;
