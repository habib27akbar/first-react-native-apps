import React, { useEffect } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
    useEffect (() => {
        //Call API method GET
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

        //Call API method POST
        const dataForAPI = {
            
                name: "morpheus",
                job: "leader"
            
        }
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {
            console.log('post response: ', json)
        })
    }, []);
    return (
      <View style={styles.container}>
         
          <Text 
            style={styles.text}>
            API React JS
          </Text>
          
          </View>
    );
  };
  const styles = StyleSheet.create({
    text: {
      textAlign:'center'
    },
    container: {
      padding: 20,
    }
  })
  export default CallAPIVanilla;