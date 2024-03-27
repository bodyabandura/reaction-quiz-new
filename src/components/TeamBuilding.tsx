"use client"

import { useContext, useState } from "react";
import TeamBuildingCard from "./teamBuildingCard";
import Image from "next/image";
import { StateManager } from "@/utils/ContextProider";

const data = [
  {text: 'Bond my team', image: '/images/group_of_people1.png'},
  {text: 'Reduce stress', image: '/images/meditation1.png'},
  {text: 'Get active together', image: '/images/dumbells1.png'},
  {text: 'Not sure...', image: '/images/girl1.png'},
]

function TeamBuilding() {

  const [chosenOption, setChosenOption] = useState("")
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const handleNextClick = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, goal: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center text-center gap-2 mt-[-50px]">
      <video
        className="w-full mb-5"
        playsInline
        loop
        muted
        controls
        autoPlay
        controlsList="nodownload"
        poster="/poster.png"
      >
        <source src="/reaction_quiz.mp4" type="video/mp4"/>
      </video>
      <h1 className="text-4xl font-bold leading-normal">TEAM BUILDING ACTIVITY</h1>
      <p className="font-semibold text-[18px]">CUSTOMIZED TO YOUR NEEDS</p>
      <p className="text-[#979797]">1-MINUTE QUIZ</p>
      <p className="text-[#979797]">SELECT YOUR <span className="text-black font-semibold">MAIN GOAL</span></p>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4">
          {data.map(option => (
            <TeamBuildingCard
              key={option.text}
              text={option.text}
              image={option.image}
              chosenOption={chosenOption}
              setChosenOption={setChosenOption}
              handleNextStep={() => handleNextClick(option.text)}
            />
          ))}
        </div>
        <p className="text-[12px]">By choosing your goal and continuing you agree to our{" "}
          <a href="" className="underline">Terms of Conditions</a>{", "}
          <a href="" className="underline">Privacy Policy</a>{", "}
          <a href="" className="underline">Subscription Terms</a></p>
        <p className="text-[12px]">Please review before continuing</p>
      </div>
    </div>
  );
}

export default TeamBuilding;
