import { Slot } from "expo-router"
import { KeyboardAvoidingView, Platform } from "react-native"
import Toast from "react-native-toast-message"
import 'src/styles/global.css'
import { LoadingProvider } from "src/components"

const RootLayout = () => {
	return (
  	<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex flex-col h-full '>
  		<LoadingProvider>
        <Slot />
        <Toast/>
  		</LoadingProvider>
  	</KeyboardAvoidingView>
	)
}

export default RootLayout