"use client"

import { StateManager } from "@/utils/ContextProider";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";

const options = ["1-15", "16-99", "100-249", "250+"]

function TeamSize() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, team_size: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10">What is your team size?</h1>
      {options.map((option) => (
        <Fragment key={option}>
          <div
            className={`relative py-6 w-[80%] pl-4 mb-3 rounded-xl ${chosenOption === option ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
            onClick={() => nextQuestion(option)}
          >
            {chosenOption === option && (
              <Image
                src={'chosen.svg'}
                width={20}
                height={20}
                alt="image"
                className="absolute top-0 right-0 m-2"
              />
            )}
            <span className="font-semibold">{option}</span> Team members
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default TeamSize;
