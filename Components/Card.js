import React from "react";
import { View, Text,Image} from "react-native"

const Card = (props) =>{

    return (
        <View style={{height:130 ,width:130,marginLeft:7.5,marginRight:7.5,
            borderWidth:1,borderColor:'#dddddd',borderRadius:5
            }}>
                <View style= {{flex:2}}>
                    <Image 
                    style={{flex:1 ,width:null,height:null,resizeMode:'cover',borderRadius:5}}
                    source={props.imageUri}/>
                </View>
                <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                    <Text>{props.name}</Text>

                </View>
        </View>
    );

}

export default Card;