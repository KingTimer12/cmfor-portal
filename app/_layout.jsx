import { Stack } from "expo-router"
import { KeyboardAvoidingView, Platform, View, Image, TextInput, Button, TouchableOpacity } from "react-native"
import Toast from "react-native-toast-message"
import 'src/styles/global.css'
import { LoadingProvider } from "src/components"
import { FontAwesome } from "@expo/vector-icons"

const Header = () => {
    return (
        <View className="w-full h-52 bg-primary flex justify-center items-center p-8 rounded-md">
            <Image className='w-full h-32' source={require('src/assets/logo-branca-horizontal.png')} />
            <View className="w-full flex-row items-center border border-white rounded-md px-2">
                <TextInput
                    className='flex-1 p-2 text-white'
                    placeholder="Pesquisar..."
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                />
                <TouchableOpacity className='p-2'>
                    <FontAwesome name='search' size={18} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const RootLayout = () => {
	return (
  	<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex flex-col h-full '>
  		<LoadingProvider>
        <Header />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast/>
  		</LoadingProvider>
  	</KeyboardAvoidingView>
	)
}

export default RootLayout
