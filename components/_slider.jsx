import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const SliderItem = ({ item }) => {
    const router = useRouter();
    const { width: screenWidth } = useWindowDimensions();

    const handlePress = React.useCallback(() => {
        router.push(`/noticias/${item.slug}`);
    }, [item.slug, router])

    const imageWidth = screenWidth * 0.9;
    const imageHeight = imageWidth * 0.55;
    const boxWidth = imageWidth * 0.85;

    return (
        <TouchableOpacity 
            className='flex flex-col items-center justify-center p-4 gap-5' 
            style={{ width: screenWidth }} 
            onPress={handlePress}
        >
            <Image 
                source={{ uri: item.image }} 
                style={{ width: imageWidth, height: imageHeight }} 
                resizeMode='cover' 
            />
            <View 
                className='absolute p-5 rounded-md shadow-lg bg-white/90'
                style={{ 
                    bottom: screenWidth * 0.06, 
                    left: screenWidth * 0.1,
                    width: boxWidth 
                }}
            >
                <Text 
                    className='text-primary font-bold' 
                    style={{ fontSize: screenWidth * 0.045 }}
                    numberOfLines={2} 
                    ellipsizeMode='tail'
                >{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Slider = ({ data }) => {
    return (
        <View>
            <FlatList 
                pagingEnabled 
                showsHorizontalScrollIndicator={false} 
                horizontal 
                data={data} 
                renderItem={({ item, index }) => (<SliderItem item={item} key={index} />)} 
                keyExtractor={item => item.id} 
            />
        </View>
    )
}

export { Slider }
