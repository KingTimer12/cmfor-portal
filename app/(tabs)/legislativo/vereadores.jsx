import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Section, CardVereador } from 'src/components';
import { useVereadores } from 'src/store'

const Vereadores = () => {
  const { readPage, vereadores } = useVereadores();

  React.useEffect(() => {
    readPage({
      page_size: 100,
    });
  }, []);

  return (
    <ScrollView className="flex-1" nestedScrollEnabled>
        <View className="flex-1">
            <Section title="Vereadores">
                <View className="flex-row flex-wrap">
                    {vereadores.filter(f => f.ativo).map((vereador, index) => (
                        <CardVereador vereador={vereador} key={index} />
                    ))}
                </View>
            </Section>
        </View>
    </ScrollView>
  )
}

export default Vereadores
