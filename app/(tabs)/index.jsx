import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { PostBanner, Section, Slider } from 'src/components'
import { useLastPosts, usePosts, useVideos } from 'src/store'
import YoutubePlayer from "react-native-youtube-iframe";

const Home = () => {
  const { readPage, posts } = usePosts()
  const { readPage: readPageLastPosts, lastPosts } = useLastPosts()
  const { readLatest, readLive, live, latest } = useVideos()

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
    readLatest()
    readLive()
  }, [])

  if (!posts || !live) return <Text>Carregando...</Text> // Exiba um loader enquanto carrega
  return (
    <ScrollView className='flex-1' nestedScrollEnabled>
        <View className="flex-1">
            <Slider data={lastPosts.slice(0, 5).map(item => ({
                title: item.title.rendered,
                image: item._embedded['wp:featuredmedia'][0].source_url,
                id: item.id.toString() // Certifique-se de que o ID é uma string
            }))} />
            <Section title="Últimas notícias">
            <View className="flex-row flex-wrap">
                {posts.map(item => (
                <View key={item.id} className="w-1/2 p-2">
                    <PostBanner
                        image={item._embedded['wp:featuredmedia']?.[0]?.source_url || ''}
                        title={item.title.rendered}
                    />
                </View>
                ))}
            </View>
            </Section>
            <Section title="TV Câmara">
                <YoutubePlayer
                    height={300}
                    width={300}
                    videoId={live}
                />
            </Section>
            <Section title="Agenda de Eventos">

            </Section>
        </View>
    </ScrollView>
  )
}

export default Home
