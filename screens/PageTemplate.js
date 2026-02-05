import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/styles";

const PageTemplate = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Page Template</Text>
            <Button
                title="Retour"
                onPress={() =>
                    navigation.goBack("Accueil")
                }
            />
            <Button
                title="Pop vers Accueil"
                onPress={() =>
                    navigation.popTo("Accueil", { message: "popped" })
                }
            />
        </View>
    );
};

export default PageTemplate;
