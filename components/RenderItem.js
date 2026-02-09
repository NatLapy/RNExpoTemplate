import { View, Text } from "react-native";
import React from "react";

const RenderItem = ({ item }) => {
    return (
        <View>
            <Text>{item.nom}</Text>
        </View>
    );
};

export default RenderItem;
