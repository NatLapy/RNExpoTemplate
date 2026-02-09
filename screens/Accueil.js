import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/styles";

const Accueil = ({ route }) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>{route.params?.message}</Text>
            <Button
                title="Aller à la Page Équipe"
                onPress={() => navigation.navigate("equipe")}
            />
            <Button
                title="Aller à la Page 1"
                onPress={() => navigation.navigate("Page1")}
            />
        </View>
    );
};
export default Accueil;
