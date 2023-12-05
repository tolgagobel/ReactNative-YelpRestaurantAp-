import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import Resultlist from '../components/Resultlist';
import useFetch from '../hooks/useFetch';
import Config from 'react-native-config';

function First() {
    const { data, fetchData } = useFetch(
        `${Config.API_URL}/search`,
        {
            params: {
                limit: 50,
                term: 'Toast',
                location: 'İstanbul',
            },
            headers: {
                Authorization: `Bearer 8cKfqfdAN8D_H-wluWJWUc-T8zUJnF_5lWBL26mq7oghiv88v047QaXHqhNDb8T1VzVKkDrVj1h3m-ld_KksRXMQbrp-0fCLciIrbS1bLOEsjYZH0M45WHhsZBpqZXYx`,
            },
        }
    );

    const [term, setTerm] = useState('')

    const filterprice = (price) => {
        return data.businesses.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <SafeAreaView>
            <SearchBar placeholder="Ne Aramıştın?" text={term} onChangeText={setTerm} onEndText={() => fetchData()} />
            <Resultlist title="Ucuz Restaurantlar" data={filterprice('₺')} />
            <Resultlist title="Uygun Restaurantlar" data={filterprice('₺₺')} />
            <Resultlist title="Pahalı Restaurantlar" data={filterprice('₺₺₺')} />
        </SafeAreaView>
    );
}

export default First;
