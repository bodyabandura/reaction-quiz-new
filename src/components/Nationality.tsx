"use client"
import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { StateManager } from "@/utils/ContextProider";

const data = [
  {image: '/pin.png', text: 'Everyone in my team are on the same time zone'},
  {image: '/earth.png', text: 'My team members are spread globally'},
]

function Nationality() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, natinonality: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10 text-center">Is your team national or international?</h1>
      {data.map(nationality => (
        <Fragment key={nationality.text}>
          <div
            className={`relative py-6 px-3 w-[80%] mb-5 rounded-xl ${chosenOption === nationality.text ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
            onClick={() => nextQuestion(nationality.text)}
          >
            {chosenOption === nationality.text && (
              <Image
                src={'chosen.svg'}
                width={20}
                height={20}
                alt="image"
                className="absolute top-0 right-0 m-2"
              />
            )}
            <span className="font-semibold flex flex-col items-center gap-1 text-[18px]">
              <Image
                src={nationality.image}
                width={35}
                height={35}
                alt="image"
              />
              <span className="text-center">{nationality.text}</span>
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Nationality;
