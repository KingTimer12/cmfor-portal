import React from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html';
import { Section } from 'src/components';
import { usePages } from 'src/store'

const CamaraNoticias = () => {
    const { width } = useWindowDimensions();
    const { readPages, page } = usePages();

    React.useEffect(() => {
      readPages({ slug: 'jornal-camara-noticias' });
    }, []);

    const tagsStyles = {
      body: {
          marginLeft: 10,
          fontSize: 16,
      },
      p: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
      },
      a: {
        color: '#1E40AF',
      }
    }

    return (
      <ScrollView className="flex-1" nestedScrollEnabled>
          <View className="flex-1">
              <Section title="Câmara Notícias">
                  <RenderHTML contentWidth={width} tagsStyles={tagsStyles} source={{ html: page }} />
              </Section>
          </View>
      </ScrollView>
    )
}

export default CamaraNoticias
