import React from "react";
import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity,ScrollView} from "react-native"
import PackageCard from "../Components/PackageCard";
const { height, width } = Dimensions.get('window')

const Package = () =>{

    return (
        <ScrollView>
            <Text style={style.header}>0-1 Year</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            </ScrollView>
            <Text style={[{marginTop:30},style.header]}>1-3 Year</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            </ScrollView>
            <Text style={[{marginTop:30},style.header]}>3-5 Year</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            </ScrollView>
            <Text style={[{marginTop:30},style.header]}>5-8 Year</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            </ScrollView>
            <Text style={[{marginTop:30},style.header]}>8-10 Year</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            </ScrollView>
            <Text style={[{marginTop:30},style.header]}>10-12 Year</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            <PackageCard/>
            </ScrollView>
        </ScrollView>
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
            marginBottom:30,
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
export default Package;