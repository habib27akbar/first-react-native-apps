import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import FotoGw from '../../assets/images/photo-gw.jpeg'

const Item = () => {
  return(
      <View style={styles.itemContainer}>
          <Image source={ FotoGw } style={styles.avatar}/>
          <View style={styles.desc}>
            <Text style={styles.descName}>Nama Lengkap</Text>
            <Text style={styles.descEmail}>Email</Text>
            <Text style={styles.descBidang}>Bidang</Text>
          </View>
          <Text style={styles.delete}>X</Text>
      </View>
  )
}

const Crud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");

  const submit = () => {
    const data = {
      name,
      email,
      bidang
    }
    console.log('data', data);
    axios.post('http://10.0.2.2:3004/users', data)
    .then(res =>{
      console.log('res', res);
      setName("");
      setEmail("");
      setBidang("");
    })
  }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>CRUD</Text>
            <Text style={styles.text}>Masukan Data Anggota</Text>
            <TextInput style={styles.input} placeholder="Nama Lengkap" value={name} onChangeText={(value) => setName(value)}/>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(value) => setEmail(value)}/>
            <TextInput style={styles.input} placeholder="Bidang" value={bidang} onChangeText={(value) => setBidang(value)}/>
            <Button title="Simpan" onPress={submit}/>
            <View style={styles.lines}/>
            <Item/>
            <Item/>
            <Item/>
        </View>
    )
}


export default Crud

const styles = StyleSheet.create({
    text: {
      textAlign:'center',
      marginBottom: 20
    },
    container: {
      padding: 20,
    },
    lines: {
      height:2,
      backgroundColor: 'black',
      marginVertical: 20
    },
    input:{
      borderWidth: 1,
      marginBottom: 12,
      borderRadius: 25,
      paddingHorizontal: 18
    },
    desc:{
      marginLeft: 18,
      flex:1
    },
    avatar:{
      width:80,
      height:80,
      borderRadius:80
    },
    itemContainer:{
      flexDirection: 'row',
      marginBottom: 20

    },
    descName:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    descEmail:{
      fontSize: 16,
    },
    descBidang:{
      fontSize: 12,
      marginTop: 8
    },
    delete:{
      fontSize:20,
      fontWeight: 'bold',
      color: 'red',
    }
  })

