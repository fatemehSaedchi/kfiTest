import {Menu} from "@/components";
import StepIndicator from "@/components/ui/stepIndicator/StepIndicator";
import React from "react";

interface Props {
    title: string
    children: React.ReactNode
    currentStep: number
}

export function MultiStepForm({children, title, currentStep}: Props) {
    return (
        <section className={'flex w-full'}>
            <Menu currentStep={currentStep}/>
            <div className={'basis-full mt-10 container px-4 pr-[400px]'}>
                <StepIndicator currentStep={currentStep}/>
                <h1 className={'pr-24 text-blue-700 text-3xl font-bold custom-shadow'}>{title}</h1>
                {children}
            </div>
        </section>
    );
}