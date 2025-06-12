import React from 'react'
import { View, Text } from 'react-native'
import { usePosts } from 'src/store'

const Home = () => {
  const { readPage, posts } = usePosts();

  React.useEffect(() => {
    readPage({
      _embed: true,
      categories: 3,
      page: 1
    });
  }, []);
  
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text className="">{JSON.stringify(posts)}</Text>
    </View>
  )
}

export default Home
