import Connexion from "../ecrans/ecrans-auth/Connexion";
import Inscription from "../ecrans/ecrans-auth/Inscription";
import MotDePasseOublie from "../ecrans/ecrans-auth/MotDePasseOublie";
import Accueil from "../ecrans/ecrans-main/Accueil";
import Ajout from "../ecrans/ecrans-main/Ajout";
import Details from "../ecrans/ecrans-main/Details";
import Parametres from "../ecrans/ecrans-parametres/Parametres";
import Profil from "../ecrans/ecrans-parametres/Profil";
import Option from "../ecrans/ecrans-parametres/Option";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSessionStore } from "../store/sessionStore";


const stackAuthentification = createNativeStackNavigator({
  screens: {
    connexion: Connexion,
    inscription: Inscription,
    mdpOublie: MotDePasseOublie,
  },
});
const stackMain = createNativeStackNavigator({
  screens: {
    accueil: Accueil,
    ajout: Ajout,
    details: Details,
  },
});
const stackParametres = createNativeStackNavigator({
  screens: {
    parametres: Parametres,
    profil: Profil,
    option: Option,
  },
});

const isConnecte = () => useSessionStore((state) => state.isConnecte);
const isNotConnecte = () => !useSessionStore((state) => state.isConnecte);
const rootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    authentification: {
      if: isNotConnecte,
      screen: stackAuthentification,
    },
    main: {
      if: isConnecte,
      screen: stackMain,
    },
    params: {
      if: isConnecte,
      screen: stackParametres,
    },
  },
});
const Navigation = createStaticNavigation(rootStack);
export default Navigation;
