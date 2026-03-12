import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useParametreStore } from "../../store/ParametreStore";

const Historique = () => {
  const db = useSQLiteContext();
  const navigation = useNavigation();
  const [achats, setAchats] = useState([]);

  const couleur = useParametreStore((state) => state.couleur);
  const taillePolice = useParametreStore((state) => state.taillePolice);
  const langue = useParametreStore((state) => state.langue);
const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
    const parent = navigation.getParent();

    if (parent) {
      parent.setOptions({
        title: "Historique",
        headerStyle: { backgroundColor: couleur },
      });
    }

    navigation.setOptions({
      tabBarStyle: { backgroundColor: couleur },
    });}
  }, [isFocused, navigation, langue, couleur]);

  // Fonction pour charger les données
  const chargerDonnees = async () => {
    try {
      // getAllAsync récupère toutes les lignes d'un coup
      const result = await db.getAllAsync(
        "SELECT * FROM historique ORDER BY id DESC",
      );
      setAchats(result);
    } catch (error) {
      console.error("Erreur lors du chargement de l'historique", error);
    }
  };

  // Charger les données quand l'écran s'affiche
  useEffect(() => {
    // focus permet de recharger la liste quand on revient sur la page
    const unsubscribe = navigation.addListener("focus", () => {
      chargerDonnees();
    });
    return unsubscribe;
  }, [navigation]);

  // Fonction pour supprimer un élément (souvent demandé en examen)
  const supprimerAchat = async (id) => {
    Alert.alert("Suppression", "Voulez-vous supprimer cet achat ?", [
      { text: "Annuler", style: "cancel" },
      {
        text: "Supprimer",
        onPress: async () => {
          await db.runAsync("DELETE FROM historique WHERE id = ?", [id]);
          chargerDonnees(); // On rafraîchit la liste
        },
      },
    ]);
  };

  // Design de chaque ligne de l'historique
  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View>
        <Text style={styles.dateText}>{item.dateAchat}</Text>
        <Text style={[styles.totalText, { color: couleur }]}>
          {item.total.toFixed(2)} $
        </Text>
      </View>
      <Pressable onPress={() => supprimerAchat(item.id)}>
        <Text style={{ color: "red" }}>Supprimer</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique des Achats</Text>
      <FlatList
        data={achats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Aucun achat trouvé.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  itemCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
  },
  dateText: { fontSize: 14, color: "#666" },
  totalText: { fontSize: 18, fontWeight: "bold" },
  empty: { textAlign: "center", marginTop: 50, color: "#999" },
});

export default Historique;
