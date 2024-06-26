import { StateManager } from "@/utils/ContextProider";
import React, { useState, useEffect, useContext } from "react";

const Loading = ({ smallText, mainText, step }: { smallText: string, mainText: string, step: number }) => {

    const { setCurrentStep } = useContext(StateManager)

    const [animatedPercent, setAnimatedPercent] = useState(0);

    const targetPercent = 100; // Set the target percentage
    const animationDuration = 2000; // Set the duration of the animation in milliseconds
    const radius = 50;
    const strokeWidth = 7;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (animatedPercent / 100) * circumference;
    const rotationAngle = 270;

    useEffect(() => {
        let startTimestamp: number;

        const animate = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp;
            const percentage = Math.min((progress / animationDuration) * 100, targetPercent);

            setAnimatedPercent(percentage);

            if (progress < animationDuration) {
                requestAnimationFrame(animate);
            } else if (percentage === targetPercent) {
                // Call handleClick when the animation reaches 100%
                setCurrentStep(step)
            }
        };

        requestAnimationFrame(animate);
    }, [targetPercent, animationDuration, setCurrentStep]);


    return (
        <div className="flex  mt-[50px]  flex-col gap-[20px] justify-center items-center">
            <div>
                <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    {/* Background circle */}
                    <circle cx="60" cy="60" r={radius} fill="none" stroke="#E1E1E1" strokeWidth={strokeWidth} />
                    {/* Filled progress circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#5553FE"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(${rotationAngle} 60 60)`}
                    />
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20" fill="#000" className="font-bold">
                        {`${Math.round(animatedPercent)}%`}
                    </text>
                </svg>
            </div>
            <div className="text-[14px] text-[#343434] font-bold mt-[-10px]">
                {smallText}
            </div>
            <button onClick={() => setCurrentStep(step)} className="text-[#5553FE] text-[18px] md:text-[20px] font-semibold">
                {mainText}
            </button>
        </div>
    );
};

export default Loading;
