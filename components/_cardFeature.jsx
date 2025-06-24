import React from "react";
const { View, TouchableOpacity, Dimensions, Text } = require("react-native");

const { width } = Dimensions.get('screen');

const CardFeature = React.memo(({ feature }) => {
  return (
    <View className="flex flex-col items-center justify-center gap-5 h-40" style={{ width: width / 3 }}>
        {feature.title !== '' && (
            <TouchableOpacity className="flex flex-col items-center justify-center gap-5 size-32 shadow-2xl p-5 rounded-lg bg-primary" onPress={feature.onClick}>
                <Text className="text-primary-foreground text-sm font-bold text-center" numberOfLines={3} ellipsizeMode="tail">
                    {feature.title}
                </Text>
            </TouchableOpacity>
        )}
    </View>
  );
})

export { CardFeature };
