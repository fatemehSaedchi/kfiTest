import React from "react";

interface Props {
    text: string
}

export function SubmitBtn({text}: Props) {
    return (
        <div className={'w-full'}>
            <button type={"submit"} className={'py-2 px-4 bg-blue-700 text-white rounded-md justify-self-end'}>{text}</button>
        </div>
    );
}