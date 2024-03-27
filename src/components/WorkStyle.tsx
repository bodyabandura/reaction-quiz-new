"use client"

import { StateManager } from "@/utils/ContextProider";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";

const data = [
  {image: '/technologist.png', text: 'Remote'},
  {image: '/office_building.png', text: 'On-site'},
  {image: '/house_building.png', text: 'Hybrid'},
  {image: '/bus.png', text: 'Other'}
]

function WorkStyle() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, work_style: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10 text-center">What is your team&apos;s <br />work style?</h1>
      <div className="grid grid-cols-2 gap-5">
        {data.map(style => (
          <Fragment key={style.text}>
            <div
              className={`relative flex flex-col items-center p-8 rounded-xl ${chosenOption === style.text ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
              onClick={() => nextQuestion(style.text)}
            >
              {chosenOption === style.text && (
                <Image
                  src={'chosen.svg'}
                  width={20}
                  height={20}
                  alt="image"
                  className="absolute top-0 right-0 m-2"
                />
              )}
              <Image
                src={style.image}
                width={50}
                height={50}
                alt="image"
              />
              <span className="mt-1">{style.text}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default WorkStyle;
