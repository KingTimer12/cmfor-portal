import React from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html';
import { Section } from 'src/components';
import { usePages } from 'src/store'
import { iframeModel, useHtmlIframeProps } from '@native-html/iframe-plugin';
import WebView from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

const IframeRenderer = (props) => {
    const { htmlAttribs: { src } } = useHtmlIframeProps(props);
    const getYoutubeVideoId = (url) => {
        if (!url) return null;
        // Match for youtube.com/embed/VIDEO_ID format
        const embedRegex = /youtube\.com\/embed\/([^/?&]+)/;
        // Match for youtube.com/watch?v=VIDEO_ID format
        const watchRegex = /youtube\.com\/watch\?v=([^/?&]+)/;
        // Match for youtu.be/VIDEO_ID format
        const shortRegex = /youtu\.be\/([^/?&]+)/;

        const embedMatch = url.match(embedRegex);
        const watchMatch = url.match(watchRegex);
        const shortMatch = url.match(shortRegex);

        return embedMatch?.[1] || watchMatch?.[1] || shortMatch?.[1] || null;
    };

    const videoId = getYoutubeVideoId(src);
    console.log("Source:", src);
    console.log("Video ID:", videoId);

    return (
            <View>
                    <YoutubePlayer height={400} width={400} videoId={videoId} />
            </View>
    );
}

const ProjetosEspeciais = () => {
    const { width } = useWindowDimensions();
    const { readPages, page } = usePages();

    React.useEffect(() => {
      readPages({ slug: 'projetos-especiais' });
    }, []);

    const renderers = { iframe: IframeRenderer }
    const customHTMLElementModels = { iframe: iframeModel };

    return (
      <ScrollView className="flex-1" nestedScrollEnabled>
          <View className="flex-1">
              <Section backButton title="Projetos Especiais">
                  <View className='mt-4'>
                    <RenderHTML
                        WebView={WebView}
                        contentWidth={width}
                        renderers={renderers}
                        customHTMLElementModels={customHTMLElementModels}
                        source={{ html: page }}
                        renderersProps={{
                            iframe: { scalesPageToFit: true }
                        }}
                    />
                  </View>
              </Section>
          </View>
      </ScrollView>
    )
}

export default ProjetosEspeciais
