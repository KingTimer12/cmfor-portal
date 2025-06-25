import { Image } from "expo-image";
import { Dimensions, Text, View } from 'react-native';

const { width } = Dimensions.get('screen');

const PostBanner = ({ image, title }) => {
    return (
        <View className='flex flex-col items-center justify-center gap-5 -ml-2' style={{ width: width / 2 }}>
            <Image source={{ uri: image }} style={{ width: 200, height: 130 }} />
            <View className='p-5 -mt-5 shadow-2xl bg-white h-24'>
                <Text className='text-primary text-sm font-bold max-h-16 w-[11.63rem]' numberOfLines={3} ellipsizeMode='tail'>{title}</Text>
            </View>
        </View>
    )
}

export { PostBanner };
