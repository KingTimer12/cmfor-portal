import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import YouTubePlayer from "react-native-youtube-iframe";
import { useVideos } from "src/store";
import * as WebBrowser from 'expo-web-browser';

const VideosSection = () => {
    const { readLatest, readLive, live, latest } = useVideos()

    React.useEffect(() => {
        readLatest()
        readLive()
    }, [])

    const handleClick = React.useCallback(async () => {
        await WebBrowser.openBrowserAsync('https://www.youtube.com/c/C%C3%A2maraMunicipaldeFortaleza/videos')
    }, []);

    return (
        <View className='py-2 items-center justify-center'>
            <YouTubePlayer height={200} width={400} videoId={live} />
            <View className='w-full px-2 py-2'>
                <FlatList
                    key={latest.length}
                    data={latest}
                    horizontal
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View key={index} className='p-1'>
                            <YouTubePlayer height={120} width={220} videoId={item} />
                        </View>
                    )}
                    ListEmptyComponent={<Text>Nenhum vídeo disponível</Text>}
                />
                <View className="items-center mt-4">
                    <TouchableOpacity className='bg-primary w-full rounded-md' onPress={handleClick}>
                        <Text className="text-primary-foreground text-center font-semibold p-2" >
                            Ver todos os vídeos
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export { VideosSection };
