import React, {Component, useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button title="tambah" onPress={() => setNumber(number + 1)}/>
        </View>
    )
}

class CounterClass extends Component{
    state = {
        number:0
    }
    render(){
        return(
            <View>
                <Text>{this.state.number}</Text>
                <Button title="tambah" onPress={() => this.setState({number: this.state.number + 1})}/>
            </View>
        )
    }
}

export default function index() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTittle}>State Dinamis</Text>
            <Text style={styles.tittleSection}>Functional Component (Hooks)</Text>
            <Counter/>
            <Counter/>
            <Text style={styles.tittleSection}>Class Component</Text>
            <CounterClass/>
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
    tittleSection:{
        marginTop:20
    }
})
