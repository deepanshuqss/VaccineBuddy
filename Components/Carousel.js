import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Animated } from 'react-native';

import CarouselItem from './CarouselItem';

const { width, height } = Dimensions.get('window');
let flatList 

const infiniteScroll = (dataList) => {
    const numberOfData = dataList.length;
    let scrollValue = 0, scrolled = 0;

    setInterval(() => {
        scrolled ++;
        if(scrolled < numberOfData) 
            scrollValue = scrollValue + width;
        else
            scrollValue = scrolled = 0;

        if(this.flatList !== null)
            this.flatList.scrollToOffset({animated: true, offset: scrollValue})
    }, 3000)

}

const Carousel = ({data}) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);

    useEffect(() => {
        setDataList(data);
        infiniteScroll(dataList);
    })
    if(data && data.length) {
        return(
            <View style={styles.view}>
                <FlatList 
                    data={data}
                    ref={(flatList) => {this.flatList = flatList}}
                    keyExtractor={(_,index) => index.toString()}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <CarouselItem item={item}/>
                    }}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}]
                    )}
                />

                {/* <View style={styles.dotView}>
                    {
                        data.map((_,index) => {
                            let opacity = position.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            })
                            return(
                                <Animated.View
                                    key={index}
                                    style={{opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5}}
                                />
                            )
                        })
                    }
                </View> */}
            </View>
        )
    }
    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 15

    },
    view: {
        flex: 1,
        paddingTop: 10
    }

})

export default Carousel;