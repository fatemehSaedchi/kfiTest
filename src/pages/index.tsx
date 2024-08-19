import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {FileUploadInput, GoogleMapLocation, Input, MultiStepForm, SubmitBtn} from "@/components";
import {useRouter} from "next/router";

export default function Home() {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm<>()
    const router = useRouter()
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    const handleFileSelect = (file: File) => {
        setValue('idCard', file);
    };

    const submitHandler = (data) => {
        console.log(data)
        router.push('/step2')
    }

    const handleLocationSelect = (lat: number, lng: number) => {
        setLocation({ lat, lng });
        setValue('latitude', lat);
        setValue('longitude', lng);
    }

    return (
        <MultiStepForm currentStep={1} title={'نام و مشخصات'}>
            <form onSubmit={handleSubmit(submitHandler)}
                  className={'flex flex-wrap gap-5 items-start w-full pr-24 mt-14 pb-24'}>
                <Input register={register('name',
                    {
                        required: 'لطفا نام خود را وارد کنید',
                        minLength: {value: 3, message: 'نام باید حداقل 3 کاراکتر باشد'}})}
                       label={'نام :'}/>
                <Input register={register('lastName',
                    {
                        required: 'لطفا نام خانوادگی خود را وارد کنید'})}
                       label={'نام خانوادگی :'}/>
                <FileUploadInput
                    onFileSelect={handleFileSelect}
                    register={register('idCard')}
                    label={"تصویر کارت ملی:"}/>
                <GoogleMapLocation onLocationSelect={handleLocationSelect}/>
                <SubmitBtn text={'گام بعد'}/>
            </form>
        </MultiStepForm>
    )
}
