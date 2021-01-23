import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';
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
        source={{ uri: 'http://placeimg.com/640/480/tech' }} 
        style={{ 
          width: 200, 
          height: 200,
          marginLeft:20
          }} />
        <Text 
          style={{ 
                  backgroundColor: '#3498db', 
                  color:'white', width: 200, 
                  fontSize:19,
                  marginLeft:20
                }}>
          Habib Akbar Ramdhani
        </Text>
        <Text 
          style={{ 
            backgroundColor: '#3498db', 
            color:'white', 
            width: 200, 
            fontSize:20,
            marginLeft:20 
            }}>
          26 Tahun
        </Text>

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
            style={{ 
                    backgroundColor: '#666888', 
                    color:'white', width: 100, 
                    fontSize:20
                  }}>
            Bambang
          </Text>
          <Text 
            style={{ 
              backgroundColor: '#666888', 
              color:'white', 
              width: 100, 
              fontSize:20 
              }}>
            21 Tahun
          </Text>

      </View>
    )
  }
}

export default App;