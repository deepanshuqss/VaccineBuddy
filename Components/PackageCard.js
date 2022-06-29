import React from "react";
import { View, Text,Image,TouchableOpacity,StyleSheet} from "react-native"

const PackageCard = () =>{

    return (
        <View style={style.container}>
                <View>
                <Image style={{height:"100%",width:120,resizeMode:'cover'}} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontWeight:"700",fontSize:20,paddingTop:10}}>Covid Vaccine</Text>
                    <Text style={{paddingVertical:10,fontSize:16}}>₹100</Text>
                    <TouchableOpacity  style={style.buttonContainer}>
                    <Text style={style.buttonText}>Book Now</Text>
                </TouchableOpacity>
                    
                </View>
            </View>
    );

}
const style = StyleSheet.create({
    container:{
        height:130,
        flexDirection:"row",
        paddingRight:15,
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        borderColor:'#dddddd',
        borderRadius:5

    },
    header:{
        color:"white",
            fontSize:20,
            fontWeight:"500",
            backgroundColor:"#3366ff",
            marginBottom:10,
            textAlign:"center",
            paddingBottom:10,
            paddingTop:10

    },
    buttonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttonContainer: {
        backgroundColor: "#3366ff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal:6,
    },


})

export default PackageCard;