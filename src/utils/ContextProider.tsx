"use client"

import { createContext, useState } from "react";

type AdminDetail = {
  email: string,
  first_Name: string,
  last_Name: string
}

interface IStates {
  goal: string | null,
  work_style: string | null,
  work_schedule: string | null,
  team_size: string | null,
  natinonality: string | null
  moral: string | null,
  actively_participate: string | null,
  team_conflicts_experince: string | null,
  stress_at_work: string | null,
  team_members_know_each_other_on_persoal_level: string | null,
  improve_team: string[],
  activities: string[],
  events: string[],
  onboarding_call_date: string,
  admin_detail: AdminDetail,
}

const defaultAnswers: IStates = {
  goal: '',
  team_size: '',
  work_style: '',
  work_schedule: '',
  natinonality: '',
  moral: '',
  actively_participate: '',
  team_conflicts_experince: '',
  stress_at_work: '',
  team_members_know_each_other_on_persoal_level: '',
  improve_team: [],
  activities: [],
  events: [],
  onboarding_call_date: '',
  admin_detail: {
    email: '',
    first_Name: '',
    last_Name: ''
  },
}

export const StateManager = createContext<{
  currentStep: number,
  handleNextStep: () => void,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  percentage: number,
  answers: IStates,
  setAnswers: React.Dispatch<React.SetStateAction<IStates>>,
}>({
  currentStep: 0,
  handleNextStep: () => {},
  setCurrentStep: () => {},
  percentage: 0,
  answers: defaultAnswers,
  setAnswers: () => {}
})

function Provider({ children } : { children: React.ReactNode }) {

  const [currentStep, setCurrentStep] = useState<number>(0)
  const [percentage, setPercentage] = useState<number>(0)
  const [answers, setAnswers] = useState(defaultAnswers)

  const handleNextStep = () => {
    setPercentage(100/20 * (currentStep + 1))
    setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, 500);
  }

  return (
    <StateManager.Provider value={{ currentStep, setCurrentStep, handleNextStep, percentage, answers, setAnswers }}>
      {children}
    </StateManager.Provider>
  )
}

export default Provider
