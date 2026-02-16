import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../../css/styles";

const PagePreferences2 = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Page Preferences</Text>
            <Button
                title="Retour"
                onPress={() =>
                    navigation.goBack("Accueil")
                }
            />
        </View>
    );
};


export default PagePreferences2;
