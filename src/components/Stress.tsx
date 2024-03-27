"use client"
import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { StateManager } from "@/utils/ContextProider";

const data = [
  {image: '/yes.png', text: 'Yes'},
  {image: '/no.png', text: 'No'},
]

function Stress() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, stress_at_work: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-20 text-center">Do team members often experience high levels of stress at work?</h1>
      <div className="flex gap-3">
        {data.map(participate => (
          <Fragment key={participate.text}>
            <div
              className={`relative py-7 px-12 rounded-xl ${chosenOption === participate.text ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
              onClick={() => nextQuestion(participate.text)}
            >
              <div className="font-semibold flex-col justify-center gap-2 text-[18px]">
                  {chosenOption === participate.text && (
                  <Image
                    src={'chosen.svg'}
                    width={20}
                    height={20}
                    alt="image"
                    className="absolute top-0 right-0 m-2"
                  />
                )}
                <Image
                  src={participate.image}
                  width={50}
                  height={50}
                  alt="image"
                />
                <span className="block mt-3 text-center">{participate.text}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Stress;
