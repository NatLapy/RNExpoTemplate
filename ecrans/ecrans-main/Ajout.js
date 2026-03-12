import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useParametreStore } from "../../store/ParametreStore";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const Ajout = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const couleur = useParametreStore((state) => state.couleur);
  const taillePolice = useParametreStore((state) => state.taillePolice);
  const langue = useParametreStore((state) => state.langue);

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();

      if (parent) {
        parent.setOptions({
          title: "Ajout",
          headerStyle: { backgroundColor: couleur },
        });
      }

      navigation.setOptions({
        tabBarStyle: { backgroundColor: couleur },
      });
    }
  }, [isFocused,navigation, langue, couleur]);

  //exemple pour charger les données d'une table avec sqlite

  const [achats, setAchats] = useState([]);
  const bd = useSQLiteContext();

  const chargerHistorique = async () => {
    try {
      const resultat = await bd.getAllAsync(
        "SELECT * FROM historique ORDER BY id ASC",
      );
      setAchats(resultat);
    } catch (e) {
      console.log("Erreur lors de la lecture de l'historique", e);
    }
  };

  useEffect(() => {
    chargerHistorique();
  }, []);

  useEffect(() => {
    chargerHistorique();
  }, [achats]);

  return (
    <View>
      <Text>Ajout</Text>
    </View>
  );
};

export default Ajout;
