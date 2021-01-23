import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import photoGw from './photo-gw.jpeg';
const Profile = () => {
    return (
      <View>
          <Image 
          source={ photoGw } 
          style={StyleSheet.image} />
          <Text 
            style={StyleSheet.text}>
            Habib Akbar Ramdhani
          </Text>
          <Text style={StyleSheet.text}>26 Tahun</Text>
  
          </View>
    );
  };
  const styles = StyleSheet.create({
    text: {
      backgroundColor: '#3498db', 
      color:'white', 
      width: 200, 
      fontSize:20,
      marginLeft:20,
      width: 100, 
      height: 100,
      marginTop: 10 
    },
    image: {
      width: 200, 
      height: 200,
      marginLeft:20,
      borderWidth:2,
      borderColor:'#3498db',
      marginTop:10
    }
  })
  export default Profile;