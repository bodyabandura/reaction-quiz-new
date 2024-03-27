"use client"
import { StateManager } from "@/utils/ContextProider";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";

const data = [
  {image: '/clock.png', text: '9 to 5'},
  {image: '/owl.png', text: 'Nigth shifts'},
  {image: '/pilot.png', text: 'Flexible working hours'},
  {image: '/pencil.png', text: 'Other'}
]

function WorkSchedule() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, work_schedule: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10 text-center">What is your team’s work schedule like?</h1>
      {data.map(schedule => (
        <Fragment key={schedule.text}>
          <div
            className={`relative py-6 w-[80%] pl-4 mb-3 rounded-xl ${chosenOption === schedule.text ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
            onClick={() => nextQuestion(schedule.text)}
          >
            {chosenOption === schedule.text && (
              <Image
                src={'chosen.svg'}
                width={20}
                height={20}
                alt="image"
                className="absolute top-0 right-0 m-2"
              />
            )}
            <span className="font-semibold flex items-center gap-5">
              <Image
                src={schedule.image}
                width={35}
                height={35}
                alt="image"
              />
              {schedule.text}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default WorkSchedule;
