import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSQLiteContext } from "expo-sqlite";


const Ajout = () => {

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
  )
}

export default Ajout