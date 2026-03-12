import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStaticNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Imports des écrans
import Accueil from "../ecrans/ecrans-main/Accueil";
import Ajout from "../ecrans/ecrans-main/Ajout";
import Parametres from "../ecrans/ecrans-parametres/Parametres";
import Connexion from "../ecrans/ecrans-auth/Connexion";
import Inscription from "../ecrans/ecrans-auth/Inscription";

import { useSessionStore } from "../store/sessionStore";
import Historique from "../ecrans/ecrans-main/Historique";
import AjoutHistorique from "../ecrans/ecrans-main/AjoutHistorique";
import StylePreview from "../ecrans/ecrans-main/StylesPreview";

// --- 1. Navigation par Onglets (Tabs) ---
const MyTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false, 
  },
  screens: {
    AccueilTab: {
      screen: Accueil,
      options: {
        title: "Accueil",
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
      },
    },
    AjoutTab: {
      screen: Ajout,
      options: {
        title: "Ajouter",
        tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={size} color={color} />,
      },
    },
    HistoriqueTab: {
      screen: Historique,
      options: {
        title: "Historique",
        tabBarIcon: ({ color, size }) => <Ionicons name="time" size={size} color={color} />,
      },
    },
    AjoutHistoriqueTab: {
      screen: AjoutHistorique,
      options: {
        title: "Ajouter à l'historique",
        tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={size} color={color} />,
      },
    },
    StylesPreviewTab: {
      screen: StylePreview,
      options: {
        title: "Styles",
        tabBarIcon: ({ color, size }) => <Ionicons name="color-palette" size={size} color={color} />,
      },
    },
  },
});

const MyDrawer = createDrawerNavigator({
  screens: {
    Main: {
      screen: MyTabs,
      options: { 
        headerShown: true, 
        title: "Accueil", 
      },
    },
    Reglages: {
      screen: Parametres,
      options: { 
        title: "Paramètres",
        headerShown: true, 
      },
    },
  },
});

const AuthStack = createNativeStackNavigator({
  screens: {
    connexion: Connexion,
    inscription: Inscription,
  },
});

const RootStack = (isConnecte) => createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    auth: {
      if: () => !isConnecte,
      screen: AuthStack,
    },
    app: {
      if: () => isConnecte,
      screen: MyDrawer,
    },
  },
});

export const Navigation = () => {
  const isConnecte = useSessionStore((state) => state.isConnecte);
  
  const NavigationComponent = createStaticNavigation(RootStack(isConnecte));
  
  return <NavigationComponent />;
};