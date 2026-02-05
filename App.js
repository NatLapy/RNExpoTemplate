import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./css/styles";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accueil from "./screens/Accueil";
import PageTemplate from "./screens/PageTemplate";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
    const RootStack = createNativeStackNavigator({
        initialRouteName: "Accueil",
        screens: {
            Accueil: {
                screen: Accueil,
                options: {
                  title: "Bienvenue",
                },
                message: "Bienvenue sur l'accueil",
            },
            Page1: {
                screen: PageTemplate,
                options: {
                    title: "Page 1",
                }
            },
        },
    });
    const Navigation = createStaticNavigation(RootStack);
    return <Navigation />;
}
