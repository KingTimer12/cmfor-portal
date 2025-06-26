import React from 'react'
import { View, ScrollView } from 'react-native'
import { Section, CardFeature } from 'src/components';
import * as WebBrowser from 'expo-web-browser';

const Cidadao = () => {
  const cidadao = [
    { title: 'Central da Cidadania', onClick: async () => await WebBrowser.openBrowserAsync('https://centraldacidadania.cmfor.ce.gov.br/agendamentos/') },
    { title: 'Escola do Parlamento - EPFor', onClick: async () => await WebBrowser.openBrowserAsync('https://epfor.cmfor.ce.gov.br/inicio/') },
    { title: 'Biblioteca José de Alencar', onClick: async () => await WebBrowser.openBrowserAsync('https://biblioteca.cmfor.ce.gov.br/inicio/') },
    { title: 'Ouvidoria/E-SIC', onClick: async () => await WebBrowser.openBrowserAsync('https://portaltransparencia.cmfor.ce.gov.br/ouvidoria') },
    { title: 'Transparência', onClick: async () => await WebBrowser.openBrowserAsync('https://portaltransparencia.cmfor.ce.gov.br/inicio') },
  ];

  return (
    <ScrollView className="flex-1" nestedScrollEnabled>
        <View className="flex-1">
            <Section backButton title="Serviços ao cidadão">
                <View className="flex-row flex-wrap">
                    {cidadao.map((feature, index) => (
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

export default Cidadao
