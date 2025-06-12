import { Stack } from "expo-router"
import { KeyboardAvoidingView, Platform, View, Image } from "react-native"
import Toast from "react-native-toast-message"
import 'src/styles/global.css'
import { LoadingProvider } from "src/components"

const Header = () => {
	return (
		<View className="w-full h-40 bg-primary flex justify-center items-center p-8 rounded-md gap-2">
	  	<Image className='w-full h-52' source={require('src/assets/logo-branca-horizontal.png')} />
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