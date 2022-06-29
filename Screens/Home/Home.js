import React from 'react';
import Carousel from '../../Components/Carousel';
import data from '../../Data/Data'
import { View, Text, Dimensions, ScrollView} from "react-native"
import PackageButton  from '../../Components/Home/packageButton';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const { height, width } = Dimensions.get('window')

const con = () =>{
    console.log("hii");
}
import Card from "../../Components/Card";

const Home = ({navigation}) => {
    return (
        <View>
            <Appbar.Header>
            <Appbar.Content title="Welcome to Vaccine Buddy" />
                <Appbar.Action icon="magnify" onPress={() => {}} />
                <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
            </Appbar.Header>
            <ScrollView scrollEventThrottle={16}>
                <Carousel data={data} />
                <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
            </View>
                <View style={{height:130 , marginTop:20,marginBottom:20,marginRight:7.5,marginLeft:7.5}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQrt6Wqj4KyURBMcU_vEE5OAge8UWIl4nUQ&usqp=CAU'}} name="Covid Vaccine"/>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHJhHZM8V9jiPTd_MkPIel9TyMRBdHNnx3Q&usqp=CAU'}} name="Viral Vaccine"/>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUs5Dsh4d6K3YSQLdR9aiAyjAYoKbQmD5wg&usqp=CAU'}} name="Flu Vaccine"/>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcvDI-ddeAtkw3ySXQQ7BL5tYe3jF_XFmog&usqp=CAU'}} name="Dengu Vaccine"/>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yin35GY_VUwudEF8GkZr2K3jCey4EhRYpw&usqp=CAU'}} name="Polio Vaccine"/>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZL5kvZSPSrky15X61AR0V_oltcr6112n_A&usqp=CAU'}} name="HB12 Vaccine"/>
                        <Card imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_aTg1eDvgD3uO7mEyd1Zg2XBH8K1-B_qFA&usqp=CAU'}} name="H1 Vaccine"/>
                    </ScrollView>
                </View>
                

            </ScrollView>
        </View>
);

}
export default Home;
