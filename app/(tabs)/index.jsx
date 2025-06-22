import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { PostBanner, Section, Slider } from 'src/components'
import { usePosts } from 'src/store'

const Home = () => {
  const { readPage, posts } = usePosts()

  React.useEffect(() => {
    readPage({
      _embed: true,
      categories: 3,
      page: 1
    })
  }, [])

  if (!posts) return <Text>Carregando...</Text> // Exiba um loader enquanto carrega

  return (
    <ScrollView className='flex-1' nestedScrollEnabled>
        <View className="flex-1">
            <Slider data={posts.map(item => ({
                title: item.title.rendered,
                image: item._embedded['wp:featuredmedia'][0].source_url,
                id: item.id.toString() // Certifique-se de que o ID é uma string
            }))} />
            <Section title="Últimas notícias">
                <FlatList
                    data={posts.map(item => ({
                        id: item.id.toString(),
                        title: item.title.rendered,
                        image: item._embedded['wp:featuredmedia']?.[0]?.source_url || ''
                    }))}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <PostBanner image={item.image} title={item.title} />}
                    key="two-column-list"
                />
            </Section>
        </View>
    </ScrollView>
  )
}

export default Home
