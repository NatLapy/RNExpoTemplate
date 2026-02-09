import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accueil from "../screens/Accueil";
import PageTemplate from "../screens/PageTemplate";
import Equipe from "../screens/Equipe";
import AjoutJoueur from "../screens/AjoutJoueur";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Accueil",
    screenOptions: {
        headerStyle: { backgroundColor: "#15757e" },
        headerTintColor: "#fff",
    },
    screens: {
        Accueil: {
            screen: Accueil,
            options: {
                title: "Bienvenue",
            },
        },
        equipe: {
            screen: Equipe,
            options: {
                title: "Équipe",
            },
        },
        ajoutJoueur: {
            screen: AjoutJoueur,
            options: {
                title: "Ajouter un Joueur",
            },
        },
        Page1: {
            screen: PageTemplate,
            options: {
                title: "Page 1",
            },
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
