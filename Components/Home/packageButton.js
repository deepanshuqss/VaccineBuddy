import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import {Card} from 'react-native-paper'
import Icon from "react-native-vector-icons/AntDesign"

export default function PackageButton({iconName,text1,text2,width,oncall }) {

    return (
            <Pressable onPress={oncall} style={({ pressed })=>[{ width: width / 2 - 30, height: width / 2 - 70,backgroundColor: pressed ? '#3366ff' : 'white' ,borderWidth: 0.5, borderColor: '#dddddd' ,borderRadius: 7,marginTop:10 }]}>
                 {({ pressed }) => (
                    <>
                    <View style={{ flex: 1 }}>
                        <Icon style={[{ color: pressed ? 'white' : '#3366ff' },styles.icon]} name={iconName}></Icon>   
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 13,fontWeight: '500', color: pressed ? 'white' : 'black' }}>{text1}</Text>
                        <Text style={{ fontSize: 11 , color: pressed ? 'white' : 'grey' }}>{text2}</Text>
                        <Icon style={{ color: pressed ? 'white' : '#3366ff',fontSize:33}} name="minus"></Icon>   
                    </View>
                    </>
                    )}
            </Pressable>
    );

}

const styles = StyleSheet.create({
icon:{
    fontSize:35,
    paddingTop:10,
    paddingLeft:15
},
})