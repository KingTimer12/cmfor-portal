import { useRouter } from 'expo-router';
import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Section, CardFeature } from 'src/components';
import { usePosts } from 'src/store'

const Legislativo = () => {
  const router = useRouter();

  const legislativa = [
    { title: 'Vereadores', onClick: () => router.push('/legislativo/vereadores') },
    { title: 'Mesa diretora' },
    { title: 'Diário Oficial' },
    { title: 'Matérias Legislativas' },
    { title: 'Sessões Plenárias' },
    { title: 'Pautas das Sessões' },
    { title: 'Relatórios' },
    { title: 'Lei Orgânica' },
    { title: 'Regimento Interno' },
    { title: 'Normas por Assunto' }
  ];

  const commissions = [
    { title: 'Convocação das Comissões' },
    { title: '' },
    { title: '' },
  ];

  return (
    <ScrollView className="flex-1" nestedScrollEnabled>
        <View className="flex-1">
            <Section title="Atividade legislativa">
                <View className="flex-row flex-wrap">
                    {legislativa.map((feature, index) => (
                        <CardFeature
                            feature={feature}
                            key={index}
                        />
                    ))}
                </View>
            </Section>
            <Section title="Comissões">
                <View className="flex-row flex-wrap">
                    {commissions.map((feature, index) => (
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

export default Legislativo
