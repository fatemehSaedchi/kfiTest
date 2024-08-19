import {useState, useEffect} from "react";
import Select from 'react-select';


interface CityOption {
    value: string;
    label: string;
}

export function CitySelectTag() {
    const [cityOptions, setCityOptions] = useState<CityOption[]>([]);
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

    useEffect(() => {
        const loadCities = async () => {
            try {
                const response = await fetch('https://iran-locations-api.ir/api/v1/fa/cities');
                const cities = await response.json();

                const options = cities.map((city: { name: string }) => ({
                    value: city.name,
                    label: city.name,
                }));

                setCityOptions(options);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        loadCities();
    }, []);


    const handleChange = (selectedOption: CityOption | null) => {
        setSelectedCity(selectedOption);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: '#282828',
            boxShadow: 'none',
            borderRadius: '8px',
            padding: '2px',
            '&:hover': {
                borderColor: '#282828',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#60a5fa' : state.isFocused ? '#dbeafe' : null,
            color: state.isSelected ? '#ffffff' : '#1f2937',
            '&:hover': {
                backgroundColor: '#dbeafe',
                color: '#1f2937',
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '0.25rem',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#6b7280',
        }),
    };

    return (
        <div className={'flex flex-col gap-2 text-gray-700 basis-2/5'}>
            <label htmlFor="cities">شهر:</label>
            <Select
                id={'cities'}
                value={selectedCity}
                onChange={handleChange}
                options={cityOptions}
                placeholder="شهر خود را انتخاب کنید"
                isLoading={cityOptions.length === 0}
                isClearable
                styles={customStyles}
            />
        </div>
    );
}