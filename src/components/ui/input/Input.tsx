import React, {useId} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    register: UseFormRegisterReturn<any>
    type?: 'text' | 'number' | 'email' | 'tel' | 'password',
    label?: string
    className?: string
}

export function Input({register, type = 'text', label, className='',...rest}: Props) {

    const id = useId()

    return (
        <div className={'flex flex-col gap-2 basis-2/5'}>
            <label htmlFor={id} className={'text-gray-700'}>{label}</label>
            <input {...register} {...rest} id={id} type={type} className={'border border-gray-700 p-2 rounded-lg'}/>
        </div>
    );
}