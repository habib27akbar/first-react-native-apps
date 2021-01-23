import React, { Component } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import photoGw from './photo-gw.jpeg';
const App = () => {
  return (
    <View>
      
      <Profile/>
      <ProfileKucing/>
     
    </View>
    
  );
};

const Profile = () => {
  return (
    <View>
        <Image 
        source={ photoGw } 
        style={{ 
          width: 200, 
          height: 200,
          marginLeft:20,
          borderWidth:2,
          borderColor:'#3498db',
          marginTop:10
          }} />
        <Text 
          style={StyleSheet.text}>
          Habib Akbar Ramdhanii
        </Text>
        <Text style={StyleSheet.text}>26 Tahun</Text>

        </View>
  );
};



class ProfileKucing extends Component{
  render(){
    return (
      <View>
         <Image 
         source={{ uri: 'http://placeimg.com/640/480/animals' }} 
         style={{ width: 100, 
                  height: 100,
                  marginTop: 10
                  }} />
         <Text 
            style={StyleSheet.text}>
            Bambangg
          </Text>
          <Text 
            style={StyleSheet.text}>
            21 Tahun
          </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#3498db', 
    color:'white', 
    width: 200, 
    fontSize:20,
    marginLeft:20 
  }
})

export default App;