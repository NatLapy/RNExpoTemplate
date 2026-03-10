import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accueil from "./ecrans/ecrans-main/Accueil";
import Parametres from "./ecrans/ecrans-parametres/Parametres";
import { createStaticNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { createDrawerNavigator } from "@react-navigation/drawer";

import './gesture-handler'

import { SQLiteProvider } from 'expo-sqlite';

export default function App() {


//exemple pour créer un bd avec sqlite
const initDB = async (db) => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS historique (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dateAchat TEXT NOT NULL,
        total REAL NOT NULL
      );
    `);
    console.log("Base de données initialisée avec succès");
  } catch (e) {
    console.log("Erreur lors de l'initialisation de la DB", e);
  }
};






const MyTabs = createBottomTabNavigator({
  screens: {
    AccueilTab: {
      screen: Accueil,
      options: {
        title: "Accueil",
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
      },
    },
    ParametresTab: {
      screen: Parametres,
      options: {
        title: "Réglages",
        tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
      },
    },
  },
});

// 2. Définition du Drawer Navigator
const MyDrawer = createDrawerNavigator({
  screens: {
    // Le premier écran du Drawer est en fait l'ensemble de nos onglets !
    Main: {
      screen: MyTabs,
      options: {
        headerShown: false,
        title: "Application Principale",
      },
    },
  },
});

// 3. Exportation de la navigation finale

  // const Navigation = createStaticNavigation(Menu);

  const Navigation = createStaticNavigation(MyDrawer);

  return (
    <SQLiteProvider databaseName="historique.db" onInit={initDB}>
      <Navigation />
    </SQLiteProvider>
  );
}
