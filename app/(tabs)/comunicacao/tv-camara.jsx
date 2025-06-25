import React from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html';
import { Section } from 'src/components';
import { usePages } from 'src/store'

const TVCamara = () => {
    const { width } = useWindowDimensions();
    const { readPages, page } = usePages();

    React.useEffect(() => {
      readPages({ slug: 'tv-fortaleza' });
    }, []);

    const tagsStyles = {
      body: {
          marginLeft: 10,
          fontSize: 16,
      },
      a: {
          color: '#1E40AF',
      }
    }

    return (
      <ScrollView className="flex-1" nestedScrollEnabled>
          <View className="flex-1">
              <Section title="TV Câmara Fortaleza 7.2">
                  <RenderHTML contentWidth={width} tagsStyles={tagsStyles} source={{ html: page }} />
              </Section>
          </View>
      </ScrollView>
    )
}

export default TVCamara
