import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
    useEffect (() => {
        //Call API method GET
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))

        //Call API method POST
        // const dataForAPI = {
            
        //         name: "morpheus",
        //         job: "leader"
            
        // }
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response: ', json)
        // })
    }, []);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    return (
      <View style={styles.container}>
         
          <Text 
            style={styles.text}>
            API React JS
          </Text>
          <Button title="GET DATA" onPress={getData}/>
          <Text style={styles.text}>Response GET DATA</Text>
          <View style={styles.lines}/>
          <Button title="POST DATA"/>
          <Text style={styles.text}>Response POST DATA</Text>
          
          </View>
    );
  };
  const styles = StyleSheet.create({
    text: {
      textAlign:'center'
    },
    container: {
      padding: 20,
    },
    lines: {
      height:2,
      backgroundColor: 'black',
      marginVertical: 20
    }
  })
  export default CallAPIVanilla;