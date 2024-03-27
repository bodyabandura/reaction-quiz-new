"use client";
import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { toast, Toaster } from "sonner";
import { StateManager } from "@/utils/ContextProider";


const CreateChallange = () => {
  const { handleNextStep, setAnswers } = useContext(StateManager);
  const today = new Date()

  const [selectedDate, setSelectedDate] = useState({
    startDate: today,
    endDate: undefined as Date | undefined, // explicitly provide the type here
    key: "selection",
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (ranges: any) => {
    setSelectedDate({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const dateRangePickerContainer = document.querySelector(
      ".rdrDateRangeWrapper"
    );

    if (
      dateRangePickerContainer &&
      !dateRangePickerContainer.contains(e.target as Node) &&
      isDatePickerOpen
    ) {
      setIsDatePickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDatePickerOpen]);

  const handleNextClick = () => {
    if (selectedDate.endDate === undefined) {
      toast.error("Select End Date");
      return false;
    }
    if (selectedDate.startDate) {
      const data = {
        selectedDate: selectedDate,
      };
      setAnswers(prev => ({ ...prev, create_step_challenge: { ...prev.create_step_challenge, selectedDate }}))
      handleNextStep();
      toast.success("Saving Your Details");
    }
  };

  return (
    <div className="mt-[30px] relative">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-center">
          Onboarding Call
        </h1>
        <p className="text-xl text-[#979797] mb-5">Let’s set it up together</p>
      </div>
      <div>
        <Toaster richColors position={"top-center"} closeButton={true} />
      </div>
      <div className="flex justify-center">
        <DateRangePicker
          ranges={[selectedDate as Range]}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          months={1}
          direction="horizontal"
          minDate={today}
        />
      </div>
      <div className="px-[20px]">
        <button
          onClick={handleNextClick}
          className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateChallange;
