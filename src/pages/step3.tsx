import {Input, MultiStepForm, SubmitBtn} from "@/components";
import {useForm} from "react-hook-form";


export default function Step3() {

    const {register, handleSubmit, setValue, formState:{errors}} = useForm()

    const submit = (data) => {
        console.log(data)
    }

    return (
        <MultiStepForm currentStep={3} title={'سابقه کاری'}>
            <form onSubmit={handleSubmit(submit)}
                  className={'flex flex-wrap gap-5 items-start w-full pr-24 mt-14'}>
                <Input
                    register={register('companyName',
                        {required: 'لطفا نام شرکت را وارد کنید'})}
                    label={'نام شرکت:'}/>
                <Input
                    register={register('CooperationPeriod',
                        {required: 'لطفا مدت زمان همکاری خود را وارد کنید'})}
                    label={'مدت همکاری:'}/>
                <Input
                    register={register('companyName2',
                        {required: 'لطفا نام شرکت را وارد کنید'})}
                    label={'نام شرکت:'}/>
                <Input
                    register={register('CooperationPeriod2',
                        {required: 'لطفا مدت زمان همکاری خود را وارد کنید'})}
                    label={'مدت همکاری:'}/>
                <SubmitBtn text={'تکمیل فرم'}/>
            </form>
        </MultiStepForm>
    );
}