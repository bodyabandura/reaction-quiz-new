"use client"
import React, { useEffect, useState, useContext } from "react";
import { LogosSlider } from "./LogosSlider";
import { StateManager } from "@/utils/ContextProider";
import 'swiper/css';
import 'swiper/css/pagination';

const LoadingWithSlider = () => {

    const { setCurrentStep } = useContext(StateManager)

    const logos1 = [
      { "img": "/logos/microsoft.png", "label": "Microsoft" },
      { "img": "/logos/ikea.png", "label": "Ikea" },
      { "img": "/logos/remax.png", "label": "Remax" },
      { "img": "/logos/amazon.png", "label": "Amazon" },
      { "img": "/logos/american_express.png", "label": "American Express" },
      { "img": "/logos/department_of_justice.png", "label": "Department Of Justice" },
      { "img": "/logos/hyundai.png", "label": "Hyundai" }
    ]
    const logos2 = [
      { "img": "/logos/amdocs.png", "label": "Amdocs" },
      { "img": "/logos/phzer.png", "label": "Phzer" },
      { "img": "/logos/arla.png", "label": "Arla" },
      { "img": "/logos/google.png", "label": "Google" },
      { "img": "/logos/jp_morgan.png", "label": "J.P. Morgan" },
      { "img": "/logos/american_cancer_society.png", "label": "American Cancer Society" },
      { "img": "/logos/barclays.png", "label": "Barclays" }
    ]
    const logos3 = [
      { "img": "/logos/lululemon_athletica.png", "label": "Lululemon Athletica" },
      { "img": "/logos/meta.png", "label": "Meta" },
      { "img": "/logos/citi.png", "label": "Citi" },
      { "img": "/logos/lidl.png", "label": "Lidl" },
      { "img": "/logos/pwc.png", "label": "PWC" },
      { "img": "/logos/unilever.png", "label": "Unilever" },
      { "img": "/logos/bnp_paribas.png", "label": "BNP Paribas" }
    ]

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => {
                const nextPercent = prevPercent + 1;
                if (nextPercent === 100) {
                    clearInterval(interval); // Stop the interval when percent reaches 100
                    setTimeout(() => setCurrentStep(13), 3300); // Call handleNextStep after 2 seconds
                }
                return nextPercent;
            });
        }, 150); // Adjust the interval duration for smoother animation
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [setCurrentStep]);

    return (
        <div className="flex mt-[60px] flex-col gap-[20px] justify-center items-center">
            <div className="text-[14px] text-[#343434] font-bold mt-[-10px]">
                Creating engagement score...
            </div>
            <div className="w-[100%] mt-[10px]">
                <h1 className="text-center mb-[5px] text-[#343434] font-bold text-[20px] md:text-[22px]">
                    {percent}%
                </h1>
                <div
                    className="w-[100%] bg-[#E1E1E1] h-[5px] md:h-[8px] rounded-md overflow-hidden"
                    style={{ borderRadius: "5px" }}
                >
                    <div
                        className="bg-[#5553FE] h-full transition-all"
                        style={{
                            width: `${percent}%`,
                            borderRadius: "5px",
                        }}
                    />
                </div>
            </div>
            <div className="mt-[20px] sm:mt-[30px] text-center text-[14px] md:text-[22px] font-bold text-[#5553FE]">
                Reaction data warehouse<br/>
                <span className="text-[16px] font-semibold text-[#343434]">
                    Comparing to baseline
                </span>
            </div>
            <div className="mt-[20px] w-full">
                <LogosSlider items1={logos1} items2={logos2} items3={logos3}/>
            </div>
        </div>
    );
};

export default LoadingWithSlider;
