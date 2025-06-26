import { Image } from 'expo-image';
import React from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import RenderHTML, { useInternalRenderer } from 'react-native-render-html';
import { Section } from 'src/components';
import { usePages } from 'src/store'

const CustomImageRenderer = (props) => {
    const { rendererProps } = useInternalRenderer('img', props);
    const uri = rendererProps.source.uri.replace('https://www.cmfor.ce.gov.br/', 'https://www.cmfor.ce.gov.br:8080/');
    return (
        <Image source={{ uri }} style={{ width: 200, height: 320 }} />
    )
}

const Revista = () => {
    const { width } = useWindowDimensions();
    const { readPages, page } = usePages();

    React.useEffect(() => {
      readPages({ slug: 'revista-nossa-voz' });
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

    const renderers = { img: CustomImageRenderer }

    return (
      <ScrollView className="flex-1" nestedScrollEnabled>
          <View className="flex-1">
              <Section backButton title="Revista Nossa Voz">
                  <RenderHTML contentWidth={width} renderers={renderers} tagsStyles={tagsStyles} source={{ html: page }} />
              </Section>
          </View>
      </ScrollView>
    )
}

export default Revista
