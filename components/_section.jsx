import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Section = ({ title, children, backButton = false }) => {
    const router = useRouter();

    const _handleBackPress = React.useCallback(() => {
        router.back();
    }, [router]);

    return (
        <React.Fragment>
            <View className="flex-row items-center gap-2 py-4 px-6 border-b-4 border-primary">
                {backButton && (
                    <TouchableOpacity className="p-2 rounded-full bg-primary/20" onPress={_handleBackPress}>
                        <MaterialIcons name="arrow-back" size={24} color="#009b91" />
                    </TouchableOpacity>
                )}
                <Text className="font-semibold text-primary text-2xl">{title}</Text>
            </View>
            <View className="justify-center items-center">
                {children}
            </View>
        </React.Fragment>
    );
}

export { Section }
