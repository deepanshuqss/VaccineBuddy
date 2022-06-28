import React from "react";
import { View, Text,Image} from "react-native"

const Card = (props) =>{

    return (
        <View style={{height:130 ,width:130,marginLeft:20,
            borderWidth:0.5,borderColor:'#dddddds'
            }}>
                <View style= {{flex:2}}>
                    <Image 
                    style={{flex:1 ,width:null,height:null,resizeMode:'cover'}}
                    source={props.imageUri}/>
                </View>
                <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                    <Text>{props.name}</Text>

                </View>
        </View>
    );

}

export default Card;