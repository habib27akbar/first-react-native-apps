import React, { useEffect, useState } from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState ({
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  })
  const [dataJob, setDataJob] = useState ({
    name: '',
    job: '',
  })
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
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          setDataUser(json.data)
        })
    }
    const postData = () => {
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
            setDataJob(json)
        })
    }
    return (
      <View style={styles.container}>
         
          <Text 
            style={styles.text}>
            API  Vanilla JS
          </Text>
          <Button title="GET DATA" onPress={getData}/>
          <Text style={styles.text}>Response GET DATA</Text>
          <Image source={{ uri: dataUser.avatar }}  style={{ width:100, height:100, borderRadius:50 }}/>
          <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
          <Text>{`${dataUser.email}`}</Text>
          <View style={styles.lines}/>
          <Button title="POST DATA" onPress={postData}/>
          <Text style={styles.text}>Response POST DATA</Text>
          <Text>{dataJob.name}</Text>
          <Text>{dataJob.job}</Text>
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