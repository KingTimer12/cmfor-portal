import { useRouter } from 'expo-router';
import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Section, CardFeature } from 'src/components';
import * as WebBrowser from 'expo-web-browser';

const Legislativo = () => {
  const router = useRouter();
  const year = new Date().getFullYear();

  const legislativa = [
    { title: 'Vereadores', onClick: () => router.push('/legislativo/vereadores') },
    { title: 'Mesa diretora', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/mesa-diretora/') },
    { title: 'Diário Oficial', onClick: async () => await WebBrowser.openBrowserAsync('https://diariooficial.fortaleza.ce.gov.br/') },
    { title: 'Matérias Legislativas', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/materia/pesquisar-materia') },
    { title: 'Sessões Plenárias', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/sessao/pesquisar-sessao?data_inicio__year=' + year) },
    { title: 'Pautas das Sessões', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/sessao/pauta-sessao/pesquisar-pauta?data_inicio__year=' + year) },
    { title: 'Relatórios', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/sistema/relatorios/') },
    { title: 'Lei Orgânica', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/ta/44/text') },
    { title: 'Regimento Interno', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/ta/3697/text') },
    { title: 'Normas por Assunto', onClick: async () => await WebBrowser.openBrowserAsync('https://sapl.fortaleza.ce.leg.br/norma/pesquisar') }
  ];

  const commissions = [
    { title: 'Convocação das Comissões', onClick: () => router.push('/legislativo/comissoes') },
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
