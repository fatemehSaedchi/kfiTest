import {MenuData} from "@/mock";
import React from "react";


export function Menu() {
    return (
        <aside className={'bg-gray-700 text-white w-[300px] h-screen'}>
            <ul className={'flex flex-col px-4 gap-5 mt-12 h-full'}>
                {MenuData && MenuData.map((item, index) => {
                    return (
                        <li key={index} className={'border rounded-lg p-3 text-center'}>{item}</li>
                    )
                })}
            </ul>
        </aside>
    );
}