import { Image as MotiImage } from 'moti'
import React from 'react'
import { Text, View } from 'react-native'
import { useLoading } from 'src/store/helpers'

// Logo animada da aplicação
const AnimatedLogo = React.memo(() => (
	<MotiImage
		from={{ scale: 0.9 }}
		animate={{ scale: 1 }}
		transition={{
			loop: true,
			type: 'timing',
			duration: 700,
		}}
		style={{ width: 104, height: 104 }}
		source={require('src/assets/icon.png')}
	/>
))

// Componente de loading
const Loading = React.memo(() => {
	const loading = useLoading(s => s.loading)
	const [dots, setDots] = React.useState('')
	React.useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev.length < 3 ? prev + '.' : ''))
		}, 500)
		return () => clearInterval(interval)
	}, [])

	if (loading === 0) return null
	return (
		<View className='flex h-full w-full items-center justify-center' style={{ position: 'absolute', zIndex: 9999 }}>
			<View
				className='p-3 flex justify-center items-center  h-full w-full gap-3'
				style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
			>
				<AnimatedLogo />
				<Text className='text-white'>Carregando dados{dots}</Text>
			</View>
		</View>
	)
})

// O provider que será colocado na layout
const LoadingProvider = (props) => {
	return (
		<View className='w-full h-full'>
			<Loading />
			{props.children}
		</View>
	)
}

export { LoadingProvider }
export default LoadingProvider
