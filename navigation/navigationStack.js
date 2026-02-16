import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accueil from "../screens/Accueil";
import PageTemplate from "../screens/PageTemplate";
import PagePreferences from "../screens/PagePreferences/PagePreferences";
import PagePreferences2 from "../screens/PagePreferences/PagePreferences2";

const stackMain = createNativeStackNavigator({
    screens: {
        Accueil: {
            screen: Accueil,
            options: {
                headerTitle: "Accueil",
            },
        },
        pageTemplate: {
            screen: PageTemplate,
            options: {
                headerTitle: "Page Template",
            },
        },
    },
});
const stackParams = createNativeStackNavigator({
    screens: {
        preferences: {
            screen: PagePreferences,
            options: {
                headerTitle: "Préférences",
            },
        },
        preferences2: {
            screen: PagePreferences2,
            options: {
                headerTitle: "Préférences 2",
            },
        },
    },
});

const RootStack = createBottomTabNavigator({
    screenOptions: {
        headerShown: false,
    },
    screens: {
        main: stackMain,
        params: stackParams,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
