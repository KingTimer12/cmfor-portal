import React from 'react'
import { View, Text } from 'react-native'
import { usePosts } from 'src/store'

const Home = () => {
  const { readPage, readLastPosts, posts } = usePosts();

  React.useEffect(() => {
    readPage({
      _embed: true,
      page: 1
    });
    readLastPosts({
      _embed: true,
      categories: 3,
      page: 1
    });
  }, []);

  return (
    <View className="w-full h-full bg-primary flex justify-center items-center">
      <Text className="text-primary-foreground">{JSON.stringify(posts)}</Text>
    </View>
  )
}

export default Home
