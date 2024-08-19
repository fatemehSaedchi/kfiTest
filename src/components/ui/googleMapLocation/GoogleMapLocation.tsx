import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


interface Props {
    onLocationSelect: (lat: number, lng: number) => void;
}

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 35.6892,
    lng: 51.3890
};

export function GoogleMapLocation({onLocationSelect}: Props) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    });

    const [location, setLocation] = useState(center);

    const onMapClick = useCallback((e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setLocation({ lat, lng });
        onLocationSelect(lat, lng);
    }, [onLocationSelect]);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={10}
            onClick={onMapClick}
            mapContainerClassName={'mt-5'}
        >
            <Marker position={location} />
        </GoogleMap>
    ) : <div>در حال بارگزاری...</div>;
}