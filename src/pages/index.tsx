import {useForm} from "react-hook-form";
import React from "react";
import {FileUploadInput, Input, MultiStepForm, NextBtn} from "@/components";
import {useRouter} from "next/router";

export default function Home() {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm()

    const router = useRouter()

    const handleFileSelect = (file: File) => {
        setValue('idCard', file);
    };

    const submitHandler = (data) => {
        console.log(data)
        router.push('/step2')
    }

    return (
        <MultiStepForm currentStep={1} title={'نام و مشخصات'}>
            <form onSubmit={handleSubmit(submitHandler)}
                  className={'flex flex-wrap gap-5 items-start w-full pr-24 mt-14'}>
                <Input register={register('name',
                    {
                        required: 'لطفا نام خود را وارد کنید',
                        minLength: {value: 3, message: 'نام باید حداقل 3 کاراکتر باشد'}})}
                       label={'نام :'}/>
                <Input register={register('last_name',
                    {
                        required: 'لطفا نام خانوادگی خود را وارد کنید'})}
                       label={'نام خانوادگی :'}/>
                <FileUploadInput
                    onFileSelect={handleFileSelect}
                    register={register('id_card',
                        {required: 'لطفا تصویر کارت ملی خود را وارد کنید'})}
                    label={"تصویر کارت ملی:"}/>
                <NextBtn/>
            </form>
        </MultiStepForm>
    )
}
