import React from "react";
import { View, TouchableOpacity, Dimensions, Text, Image } from "react-native";

const { width } = Dimensions.get('screen');

const CardVereador = React.memo(({ vereador }) => {
  return (
    <View className="flex flex-col items-center justify-center gap-5 h-52" style={{ width: width / 2 }}>
        {vereador.nome_parlamentar !== '' && (
            <TouchableOpacity className="flex flex-col items-center justify-center gap-2 size-44 shadow-2xl p-5 rounded-lg bg-white">
                <Image
                    source={{ uri: vereador.fotografia }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text className="text-primary text-sm font-bold text-center" numberOfLines={3} ellipsizeMode="tail">
                    {vereador.nome_parlamentar} ({vereador.partido})
                </Text>
            </TouchableOpacity>
        )}
    </View>
  );
})

export { CardVereador };
