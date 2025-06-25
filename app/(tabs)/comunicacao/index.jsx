import React from 'react'
import { View, ScrollView } from 'react-native'
import { Section, CardFeature } from 'src/components';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';

const Comunicacao = () => {
  const router = useRouter();
  const comunicacao = [
    { title: 'Comunicação social', onClick:  () => router.push('/comunicacao/comunicacao-social') },
    { title: 'TV Câmara Fortaleza', onClick:  () => router.push('/comunicacao/tv-camara') },
    { title: 'Rádio Fortaleza', onClick:  () => router.push('/comunicacao/radio-fortaleza') },
    { title: 'Câmara Notícias', onClick:  () => router.push('/comunicacao/camara-noticias') },
    { title: 'Revista Nossa Voz', onClick:  () => router.push('/comunicacao/revista-nossa-voz') },
    { title: 'Publicações', onClick:  () => router.push('/comunicacao/publicacoes') },
    { title: 'Projetos Especiais', onClick:  () => router.push('/comunicacao/projetos-especiais') },
  ];

  return (
    <ScrollView className="flex-1" nestedScrollEnabled>
        <View className="flex-1">
            <Section title="Comunicação">
                <View className="flex-row flex-wrap">
                    {comunicacao.map((feature, index) => (
                        <CardFeature
                            feature={feature}
                            key={index}
                        />
                    ))}
                </View>
            </Section>
        </View>
    </ScrollView>
  )
}

export default Comunicacao
