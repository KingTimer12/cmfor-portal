import React from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html';
import { Section } from 'src/components';
import { usePages } from 'src/store'

const Comissoes = () => {
  const { width } = useWindowDimensions();
  const { readPages, page } = usePages();

  React.useEffect(() => {
    readPages({ slug: 'comissoes' });
  }, []);

  const tagsStyles = {
    body: {
        marginLeft: 24,
    },
    p: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    a: {
        color: '#1E40AF',
        fontSize: 14,
    }
  }

  return (
    <ScrollView className="flex-1" nestedScrollEnabled>
        <View className="flex-1">
            <Section backButton title="Convocações das Comissões">
                <RenderHTML contentWidth={width} tagsStyles={tagsStyles} source={{ html: page }} />
            </Section>
        </View>
    </ScrollView>
  )
}

export default Comissoes
