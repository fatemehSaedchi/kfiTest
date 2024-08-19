import {FileUploadInput, Input, MultiStepForm, SubmitBtn} from "@/components";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {CitySelectTag} from "@/components/ui/citySelectTag";


export default function Step2() {

    const {register, handleSubmit, setValue, formState:{errors}} = useForm()

    const router = useRouter()

    const handleFileSelect = (file: File) => {
        setValue('educationDegree', file);
    };

    const submit = (data) => {
        console.log(data)
        router.push('/step3')
    }

    return (
        <MultiStepForm title={"اطلاعات تحصیلی"} currentStep={2}>
            <form onSubmit={handleSubmit(submit)} className={'flex flex-wrap gap-5 items-start w-full pr-24 mt-14'}>
                <Input
                    register={register('studyField',
                        {required:'لطفا رشته تحصیلی خود را وارد کنید'})}
                    label={'رشته تحصیلی:'}/>
                <CitySelectTag/>
                <Input
                    register={register('university',
                        {required:'لطفا نام دانشگاه/موسسه خود را وارد کنید'})}
                    label={'دانشگاه / موسسه:'}/>
                <FileUploadInput
                    onFileSelect={handleFileSelect}
                    register={register('educationDegree')}
                    label={'تصویر مدرک تحصیلی:'}/>
                <SubmitBtn text={'گام بعد'}/>
            </form>
        </MultiStepForm>
    );
}