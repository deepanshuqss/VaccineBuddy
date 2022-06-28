import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({item}) => {
    return (
        <View style={styles.cardView}>
            <ImageBackground style={styles.image} source={{uri: item.url}}>
            <View style={styles.itemTitle}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 30,
        height: height / 4,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginLeft: 15,
        marginRight: 15,
        overflow: "hidden",
    },
    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 30,
        height: height / 4,
        borderRadius: 5,
        overflow: "hidden",
    },
    itemTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        elevation: 5,
    },
    itemDescription: {
        color: '#fff',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    }

})

export default CarouselItem;