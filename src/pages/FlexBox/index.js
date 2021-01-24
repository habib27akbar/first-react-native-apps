import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import photoGw from '../../assets/images/photo-gw.jpeg';
class FlexBox extends Component{
    render(){
        return (
            //row kekanan
            //column kebawah
        <View>
            <View style={{ 
                flexDirection: 'row', 
                backgroundColor: '#95a5a6',
                alignItems: 'flex-end',//rata bawah
                justifyContent: 'space-between'//jarak percomponent
                 }}>
                <View style={{ backgroundColor:'#e74c3c', width: 50, height: 50 }} />
                <View style={{ backgroundColor:'#f1c40f', width: 50, height: 50 }}/>
                <View style={{ backgroundColor:'#2ecc71', width: 50, height: 50 }}/>
                <View style={{ backgroundColor:'#8e44ad', width: 50, height: 50 }}/>
            </View>
            <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-around'
             }}>
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Playlist</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Tentang</Text>
            </View>
            <View style={{ 
                flexDirection: 'row',
                alignItems: 'center'
             }}>
                <Image source={photoGw} style={{
                    width:100,
                    height:100,
                    borderRadius:50,
                    marginRight:15,
                    marginTop:10
                }}/>
                <View>
                    <Text style={{ fontSize:20 , fontWeight: 'bold' }}>Habib Akbar Ramdhani</Text>
                    <Text>0812</Text>
                </View>
                
            </View>
            
        </View>
        )
    }
}

export default FlexBox;