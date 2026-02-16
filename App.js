import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/navigationStack";
import { createStaticNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./css/styles";
import Accueil from "./screens/Accueil";
import PageTemplate from "./screens/PageTemplate";
import PagePreferences from "./screens/PagePreferences/PagePreferences";

export default function App() {
    /*     
    // SI ON VEUT SIMULER UN CHARGEMENT
    const [enChargement, setEnChargement] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setEnChargement(false);
        }, 5000);
    }, []);
    if (enChargement) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    } 
    */
    return <Navigation />;
}
