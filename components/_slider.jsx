import React from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';

const { width } = Dimensions.get('screen');

const SliderItem = ({ item }) => {
    return (
        <View className='flex flex-col items-center justify-center p-4 gap-5' style={{ width: width }}>
            <Image source={{ uri: item.image }} style={{ width: 450, height: 250 }} resizeMode='center' />
            <View className='absolute p-5 rounded-md bottom-6 left-11 right-0 shadow-lg bg-white/90 w-96'>
                <Text className='text-primary text-xl font-bold' numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
            </View>
        </View>
    );
};

const Slider = ({ data }) => {
    return (
        <View>
            <FlatList pagingEnabled showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={({ item, index }) => (<SliderItem item={item} key={index} />)} keyExtractor={item => item.id} />
        </View>
    )
}

export { Slider }
