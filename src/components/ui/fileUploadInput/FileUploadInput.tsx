import React, {useId, useState} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    onFileSelect: (file: File) => void
    register: UseFormRegisterReturn<any>
    label: string
}

export function FileUploadInput({label, onFileSelect, register}: Props) {

    const [preview, setPreview] = useState<string | null>(null)

    const id = useId()
    const handleFileChange = (event :React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0];
        if (file){
            const reader =  new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string)
                onFileSelect(file)
            };
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className={'flex items-center gap-5 basis-full h-32 mt-3'}>
            <div className={'flex flex-col gap-2 basis-2/5'}>
                <label htmlFor={id} className={'text-gray-700'}>{label}</label>
                <input
                    type="file"
                    id={id}
                    {...register}
                    accept={"image/*"}
                    className={'border border-gray-700 p-2 rounded-lg'}
                    onChange={handleFileChange}/>
            </div>
            {preview && (
                <div className={'mb-4'}>
                    <img src={preview} alt="preview" className={'w-32 h-32 object-cover'}/>
                </div>
            )}
        </div>
    );
}