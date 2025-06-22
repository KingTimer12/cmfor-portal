import React from "react";
import { Text, View } from "react-native";

const Section = ({ title, children }) => {
    return (
        <React.Fragment>
            <View className="py-4 px-6 border-b-4 border-primary">
                <Text className="font-semibold text-primary text-2xl">{title}</Text>
            </View>
            <View className="justify-center items-center">
                {children}
            </View>
        </React.Fragment>
    );
}

export { Section }
