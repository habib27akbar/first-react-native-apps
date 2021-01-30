import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FileSvg from '../../assets/images/undraw_Appreciation_re_p6rl.svg';
export default function index() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTittle}>SVG</Text>
            <FileSvg width={200} height={150}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding:20
    },
    textTittle:{
        textAlign:'center'
    },
})
