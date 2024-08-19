interface Props {
    currentStep: number
}

export default function StepIndicator({currentStep}: Props) {
    return (
        <div className={'flex justify-center items-center mb-8'}>
            <div className={`w-16 h-16 rounded-full text-sm text-white flex justify-center items-center font-bold ${currentStep >= 1 ? 'bg-blue-700' : 'bg-gray-100 text-blue-700'}`}>گام اول</div>
            <div className={`w-12 h-[1px] ${currentStep >= 2 ? 'bg-blue-700' : 'bg-gray-100' }`}></div>
            <div className={`w-16 h-16 rounded-full text-sm text-white flex justify-center items-center font-bold ${currentStep >= 2 ? 'bg-blue-700' : 'bg-gray-100 text-blue-700'}`}>گام دوم</div>
            <div className={`w-12 h-[1px] ${currentStep >= 3 ? 'bg-blue-700' : 'bg-gray-100' }`}></div>
            <div className={`w-16 h-16 rounded-full text-sm text-white flex justify-center items-center font-bold ${currentStep >= 3 ? 'bg-blue-700' : 'bg-gray-100 text-blue-700'}`}>گام سوم</div>
        </div>
    );
}