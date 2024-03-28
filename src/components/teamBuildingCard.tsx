"use client"

import Image from "next/image";
import { Fragment } from "react";

function TeamBuildingCard({ text, image, chosenOption, setChosenOption, handleNextStep } :
{ text: string, image: string, chosenOption: string, setChosenOption: React.Dispatch<React.SetStateAction<string>>, handleNextStep: () => void }) {

  const handleNextClick = () => {
    setChosenOption(text)
    handleNextStep()
  }

  return (
    <div
      className={`relative bg-[#F5F5F5] rounded-xl overflow-hidden flex flex-col ${chosenOption === text ? 'border-[1px] border-[#F9B22D]' : 'border-[1px] border-transparent'}`}
      onClick={() => handleNextClick()}
    >
      {chosenOption === text && (
        <Image
          src={'chosen.svg'}
          width={20}
          height={20}
          alt="image"
          className="absolute top-0 right-0 m-2"
        />
      )}
      <Image
        src={image}
        width={100}
        height={100}
        alt="image"
        className="self-center m-3"
      />
      <div className="bg-[#3C8AF0] text-white leading-loose text-[14px]">{text}</div>
    </div>
  );
}

export default TeamBuildingCard;
