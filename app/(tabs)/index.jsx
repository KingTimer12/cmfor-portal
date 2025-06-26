import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { EventsSection, PostBanner, Section, Slider, VideosSection } from 'src/components'
import { useLastPosts, usePosts } from 'src/store'

const Home = () => {
  const router = useRouter();
  const { readPage, posts } = usePosts()
  const { readPage: readPageLastPosts, lastPosts } = useLastPosts()

  const decodeHtmlEntities = (text) => {
    if (!text) return text;
    return text.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));
  }

  React.useEffect(() => {
    readPageLastPosts({
      _embed: true,
      categories: 3,
      page: 1
    })
    readPage({
      _embed: true,
      page: 1
    })
  }, [])

  if (!posts) return <Text>Carregando...</Text> // Exiba um loader enquanto carrega
  return (
    <ScrollView className='flex-1' nestedScrollEnabled>
        <View className="flex-1">
            <Slider data={lastPosts.slice(0, 5).map(item => ({
                title: item.title.rendered,
                image: item._embedded && item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : '',
                slug: item.slug,
                id: item.id.toString() // Certifique-se de que o ID é uma string
            }))} />
            <Section title="Últimas notícias">
            <View className="flex-row flex-wrap">
                {posts.map(item => (
                <View key={item.id} className="w-1/2 p-2">
                    <PostBanner
                        image={item._embedded && item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0]?.source_url : ''}
                        title={decodeHtmlEntities(item.title.rendered)}
                        slug={item.slug}
                    />
                </View>
                ))}
                <View className="w-full px-2 py-2">
                    <TouchableOpacity
                        className="flex-row items-center bg-primary px-3 py-2 rounded w-full"
                        onPress={() => router.push('/noticias')}
                    >
                        <Text className="text-white text-center w-full text-lg font-bold">Ver mais notícias</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Section>
            <Section title="TV Câmara">
                <VideosSection />
            </Section>
            <Section title="Agenda de Eventos">
                <EventsSection />
            </Section>
        </View>
    </ScrollView>
  )
}

export default Home
