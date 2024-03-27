"use client"
import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { StateManager } from "@/utils/ContextProider";

const data = [
  {image: '/red_angry.png', text: 'red_angry'},
  {image: '/stream_nose.png', text: 'stream_nose'},
  {image: '/hand_ok.png', text: 'hand_ok'},
  {image: '/person_ok.png', text: 'person_ok'},
  {image: '/man_dancing.png', text: 'man_dancing'},
]

function Conflicts() {

  const [chosenOption, setChosenOption] = useState<null | string>(null)
  const { handleNextStep, setAnswers } = useContext(StateManager)

  const nextQuestion = (option: string) => {
    setChosenOption(option)
    setAnswers(prev => ({ ...prev, team_conflicts_experince: option }))
    handleNextStep()
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-2xl mb-10 text-center">How often do you experience  conflicts in your team?</h1>
      <div className="flex gap-3">
        {data.map(conflict => (
          <Fragment key={conflict.text}>
            <div
              className={`p-2 rounded-xl ${chosenOption === conflict.text ? 'bg-[#F9B22D4D] border-[1px] border-[#F9B22D]' : 'bg-[#F5F5F5] border-[1px] border-[#F5F5F5]'}`}
              onClick={() => nextQuestion(conflict.text)}
            >
              <span className="font-semibold flex items-center gap-1 text-[18px]">
                <Image
                  src={conflict.image}
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
        <div>Very frequently</div>
        <div>Rarely</div>
      </div>
    </div>
  );
}

export default Conflicts;
