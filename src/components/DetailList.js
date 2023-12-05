import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Detail({data}) {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={data.image_url ? {uri:data.image_url} : null}/>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.rating}>{data.rating} Yıldızlı , {data.review_count} Değerlendirme</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{},
    image:{
        width:250,
        height:150,
        marginBottom:8,
        marginRight:10
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        marginBottom:3
    },
    rating:{},
})
