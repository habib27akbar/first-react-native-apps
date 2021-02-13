import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
//import FotoGw from '../../assets/images/photo-gw.jpeg'
//import Avatar from "baseui/avatar"
//import avatar from 'adorable-avatars';
import Avatar from 'react-native-user-avatar';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return(
      <View style={styles.itemContainer}>
          {/* <Image source={ FotoGw } style={styles.avatar}/> */}
        <TouchableOpacity onPress={onPress}>
          <Avatar name={name} style={styles.avatar}/>
        </TouchableOpacity>
          
          <View style={styles.desc}>
            <Text style={styles.descName}>{name}</Text>
            <Text style={styles.descEmail}>{email}</Text>
            <Text style={styles.descBidang}>{bidang}</Text>
          </View>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
          
      </View>
  )
}

const Crud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");
  const [user, setUser] = useState([]);
  const [button, setButton] = useState("Simpan");
  const [selectedUser, setSelectedUser] = useState({});
  useEffect (() => {
      getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang
    }
    if(button === 'Simpan'){
      axios.post('http://10.0.2.2:3004/users', data)
      .then(res =>{
        console.log('res', res);
        setName("");
        setEmail("");
        setBidang("");
        getData();
      })
    }else{
      axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
      .then(res =>{
        console.log('update', res);
        setName("");
        setEmail("");
        setBidang("");
        getData();
        setButton("Simpan");
      })
    }
      
  }

  const getData = () => {
    axios.get('http://10.0.2.2:3004/users')
    .then(res => {
      console.log('respon :', res)
      setUser(res.data);
    })
  }

  const selectItem = (item) => {
    setSelectedUser(item);
    console.log('selected item : ', item)
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton("Update");
  }

  const deleteItem = (item) => {
    console.log(item);
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
    .then(res => {
      console.log('delete :', res);
      getData();
    })
        
      
  }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>CRUD</Text>
            <Text style={styles.text}>Masukan Data Anggota</Text>
            <TextInput placeholder="Nama Lengkap" style={styles.input}  value={name} onChangeText={(value) => setName(value)}/>
            <TextInput placeholder="Email" style={styles.input}  value={email} onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder="Bidang" style={styles.input}  value={bidang} onChangeText={(value) => setBidang(value)}/>
            <Button title={button} onPress={submit}/>
            <View style={styles.lines}/>
            {user.map (user => {
                    return <Item 
                    name={user.name} 
                    email={user.email} 
                    bidang={user.bidang} 
                    onPress={() => selectItem(user)}
                    onDelete={() => Alert.alert(
                      'Peringatan',
                      'Anda Yakin Ingin Menghapus User Ini?',
                    [
                        {
                          text:'Tidak',
                          onPress: () => console.log('Button tidak')
                        },
                        {
                          text:'Ya',
                          onPress: () => deleteItem(user)
                        }
                    ]
                        )}
              /> 
            })}
            
            
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

