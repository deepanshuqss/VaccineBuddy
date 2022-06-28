import React from "react";
import { View, Text, Dimensions} from "react-native"
import PackageButton  from '../../Components/Home/packageButton';
const { height, width } = Dimensions.get('window')

const con = () =>{
    console.log("hii");
}

export default function Home(){

    return (
        <View>
            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
                <PackageButton oncall={con} width={width} iconName="calendar" text1="Book an Appointment" text2="with a GP or Nune" ></PackageButton>
            </View>
        </View>
    );

}
