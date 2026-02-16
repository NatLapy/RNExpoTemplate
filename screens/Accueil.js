import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/styles";

const Accueil = ({ route }) => {
    const navigation = useNavigation();
    return (
        <View>
            <Button
                title="Aller à la Page Template"
                onPress={() => navigation.navigate("pageTemplate")}
            />
            <Button
                title="Aller à la Page Préférences"
                onPress={() => navigation.navigate("params")}
            />
            <Button
                title="Aller à la Page Préférences 2 directement"
                onPress={() =>
                    navigation.navigate("params", {
                        screen: "preferences2",
                        params: { reinitialiser: true },
                    })
                }
            />
        </View>
    );
};
export default Accueil;
