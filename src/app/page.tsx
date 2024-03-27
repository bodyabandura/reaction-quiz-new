"use client"

import { StateManager } from "@/utils/ContextProider";
import { useContext } from "react";
import TeamBuilding from "@/components/TeamBuilding";
import Conflicts from "@/components/Conflicts";
import Improving from "@/components/Improving";
import Known from "@/components/Known";
import Loading from "@/components/Loading";
import Moral from "@/components/Moral";
import Nationality from "@/components/Nationality";
import Participating from "@/components/Participating";
import Stress from "@/components/Stress";
import TeamSize from "@/components/TeamSize";
import WorkSchedule from "@/components/WorkShedule";
import WorkStyle from "@/components/WorkStyle";
import LoadingWithSlider from "@/components/LoadingWithSlider";
import Charts from "@/components/Charts";
import User from "@/components/CreateUser";
import RecommendedPlan from "@/components/RecommendedPlan";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import CreateChallange from "@/components/CreateChallange";
import ThankYou from "@/components/ThankYou";

export default function Home() {

  const { currentStep } = useContext(StateManager)

  return (
    <>
      {/* {currentStep === 0 && <TeamBuilding/>} */}
      {currentStep === 1 && <TeamSize/>}
      {currentStep === 2 && <WorkStyle/>}
      {currentStep === 3 && <WorkSchedule/>}
      {currentStep === 4 && <Nationality/>}
      {currentStep === 5 && <Loading smallText="Analysing your team’s profile..." mainText="Adapting next stage assessment" step={6}/>}
      {currentStep === 6 && <Moral/>}
      {currentStep === 7 && <Participating/>}
      {currentStep === 8 && <Conflicts/>}
      {currentStep === 9 && <Stress/>}
      {currentStep === 10 && <Known/>}
      {currentStep === 11 && <Improving/>}
      {currentStep === 12 && <LoadingWithSlider/>}
      {currentStep === 13 && <Charts/>}
      {currentStep === 14 && <User/>}
      {currentStep === 15 && <RecommendedPlan/>}
      {currentStep === 16 && <Activities/>}
      {currentStep === 17 && <Events/>}
      {currentStep === 18 && <Loading smallText="Analysing data" mainText="Plan is being created" step={19}/>}
      {currentStep === 0 && <CreateChallange/>}
      {currentStep === 20 && <ThankYou/>}
    </>
  );
}
