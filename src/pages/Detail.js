import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Config from 'react-native-config';
import useFetch from '../hooks/useFetch';

export default function Detail({ route }) {
    const id = route.params.id;
    const { data } = useFetch(`${Config.API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer 8cKfqfdAN8D_H-wluWJWUc-T8zUJnF_5lWBL26mq7oghiv88v047QaXHqhNDb8T1VzVKkDrVj1h3m-ld_KksRXMQbrp-0fCLciIrbS1bLOEsjYZH0M45WHhsZBpqZXYx`,
        },
    })
    console.log(`${Config.API_URL}/${id}`)
    return (
        <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.phone}>Telefon : {data.phone}</Text>
            <View>
                <FlatList
                    data={data.photos}
                    renderItem={({ item }) => {
                        return <Image style={styles.images} source={{ uri: item}} />
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    phone: {
        fontSize: 15,
        margin: 10,
        textAlign: 'center'
    },
    images: {
        height: 150,
        margin:10,
        borderRadius:10,
        objectFit:'cover'
    },
})
