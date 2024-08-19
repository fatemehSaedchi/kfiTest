import React from "react";
import {MenuData} from "@/mock";

interface Props {
    currentStep: number
}

export function Menu({ currentStep }: Props) {
    return (
        <aside className={'bg-gray-700 text-white w-[300px] fixed right-0 top-0 h-full p-4 shadow-lg'}>
            <ul className={'flex flex-col px-4 gap-5 mt-12 h-full'}>
                {MenuData &&
                    MenuData.map((item, index) => (
                    <li key={index} className={`${currentStep >= (index + 2) ? 'hidden' : 'border rounded-lg p-3 text-center'}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
