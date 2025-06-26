import React from 'react';

import { usePosts } from 'src/store';
import { ScrollView, useWindowDimensions, Text, View, TouchableOpacity } from 'react-native';
import { Section } from 'src/components';
import { Image } from 'expo-image';
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import RenderHTML from 'react-native-render-html';
import { useRouter } from 'expo-router';

const Noticias = () => {
    const router = useRouter();
    const { readPage, posts } = usePosts()

    React.useEffect(() => {
        readPage({ _embed: true, page: 1 })
    }, [])

    if (!posts) return <View className="flex-1 items-center justify-center"><Text>Carregando...</Text></View>

    const tagsStyles = {
        body: {
            marginLeft: 10,
            fontSize: 16,
        },
        p: {
          fontSize: 20,
          marginBottom: 10,
          marginTop: 10,
          color: '#2e2e35',
        },
        a: {
          color: '#1E40AF',
        }
    }

    const decodeHtmlEntities = (text) => {
        if (!text) return text;
        return text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
    }

    const handlePostPress = (slug) => {
        router.push(`/noticias/${slug}`);
    }

    return (
        <ScrollView className="flex-1" nestedScrollEnabled>
            <View className="flex-1">
                <Section backButton title="Todas as notícias">
                    {posts.map((post) => (
                        <TouchableOpacity key={post.id} className="mt-6 shadow-lg rounded-lg bg-white p-4" onPress={() => handlePostPress(post.slug)}>
                            <View className="flex-row">
                                <Image
                                    source={{ uri: post._embedded['wp:featuredmedia'][0].source_url }}
                                    style={{ width: 200, height: 150, borderRadius: 10, marginVertical: 5 }}
                                />
                                <View className="w-44 justify-between ml-4">
                                    <Text numberOfLines={6} ellipsizeMode='tail' className="text-primary text-lg font-bold mb-2">
                                        {decodeHtmlEntities(post.title.rendered)}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </Section>
            </View>
        </ScrollView>
    )
}

export default Noticias
