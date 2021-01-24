import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
    return (
        <View style={{ alignItems:'center', marginRight:15, marginTop:15 }}>
            <Image 
            source={{ 
                uri: props.images
                 }}
            style={{ 
                width:80, 
                height:80,
                borderRadius:50
            }}
                 />
            <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.name}</Text>
        </View>
    )
}

export default function index() {
    return (
        <View>
            <ScrollView horizontal>
                <View style={{ flexDirection:'row' }}>
                    <Story name="Judul 1" images="https://placeimg.com/640/480/animals"/>
                    <Story name="Judul 2" images="https://placeimg.com/640/480/arch"/>
                    <Story name="Judul 3" images="https://placeimg.com/640/480/nature"/>
                    <Story name="Judul 4" images="https://placeimg.com/640/480/people"/>
                    <Story name="Judul 5" images="https://placeimg.com/640/480/tech"/>
                    <Story name="Judul 6" images="https://placeimg.com/640/480/tech/grayscale"/>
                    <Story name="Judul 7" images="https://placeimg.com/640/480/tech/sepia"/>
                </View>
            </ScrollView>
            
            
        </View>
    )
}

const styles = StyleSheet.create({})
