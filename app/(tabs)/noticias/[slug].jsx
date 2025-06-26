import React from 'react';

import { useLocalSearchParams } from 'expo-router';
import { usePosts } from 'src/store';
import { ScrollView, useWindowDimensions, Text, View } from 'react-native';
import { Section } from 'src/components';
import { Image } from 'expo-image';
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import RenderHTML from 'react-native-render-html';

const Noticia = () => {
    const { width } = useWindowDimensions();
	const { slug } = useLocalSearchParams()
    const { readPage, posts } = usePosts()

    React.useEffect(() => {
        readPage({ _embed: true, slug: slug })
    }, [slug])

    if (!posts) return <View className="flex-1 items-center justify-center"><Text>Carregando...</Text></View>
    const post = posts[0]
    if (!post) return <View className="flex-1 items-center justify-center"><Text>Notícia não encontrada</Text></View>

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

    return (
        <ScrollView className="flex-1" nestedScrollEnabled>
            <View className="flex-1">
                <Section backButton title={post.title.rendered}>
                    <View className="justify-center items-center w-full">
                        <Text className='text-sm text-left w-full pl-2 mt-1'>{format(parseISO(post.date.split("T")[0]), 'PPP', { locale: ptBR })}</Text>
                        <Image
                            source={{ uri: post._embedded['wp:featuredmedia'][0].source_url }}
                            style={{ width: 400, height: 250, borderRadius: 10, marginVertical: 5 }}
                        />
                    </View>
                    <RenderHTML contentWidth={width} tagsStyles={tagsStyles} source={{ html: post.content.rendered }} />
                </Section>
            </View>
        </ScrollView>
    )
}

export default Noticia
