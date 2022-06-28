import React from 'react';
import { View, ScrollView } from 'react-native';
import Carousel from '../../Components/Carousel';
import data from '../../Data/Data'

const Home = ({navigation}) => {
    return (
        <View>
            <ScrollView scrollEventThrottle={16}>
                <Carousel data={data} />
            </ScrollView>
        </View>
    )
}

export default Home;
