import React from 'react'
import { View, Text } from 'react-native'
import { useEventos } from 'src/store'

const Home = () => {
  const { readAll, eventos } = useEventos();

  React.useEffect(() => {
    readAll();
  }, []); // ✅ `readAll` como dependência
  
  return (
    <View className="w-full h-full bg-primary flex justify-center items-center">
      <Text className="text-primary-foreground">{JSON.stringify(eventos)}</Text>
    </View>
  )
}

export default Home
