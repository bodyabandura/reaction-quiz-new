"use client"
import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { StateManager } from "@/utils/ContextProider";

const data = [
  {image: '/sad.png', text: 'sad'},
  {image: '/confused.png', text: 'confused'},
  {image: '/neutral.png', text: 'neutral'},
  {image: '/smiling.png', text: 'smiling'},
  {image: '/grinning.png', text: 'grinning'},
]

function Moral() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, moral: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10 text-center">How do you perceive the overall morale of your team?</h1>
      <div className="flex gap-3">
        {data.map(moral => (
          <Fragment key={moral.text}>
            <div
              className={`p-2 rounded-xl ${chosenOption === moral.text ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
              onClick={() => nextQuestion(moral.text)}
            >
              <span className="font-semibold flex items-center gap-1 text-[18px]">
                <Image
                  src={moral.image}
                  width={40}
                  height={40}
                  alt="image"
                />
              </span>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="w-full flex justify-between mt-2">
        <div>Very Low</div>
        <div>Very High</div>
      </div>
    </div>
  );
}

export default Moral;
