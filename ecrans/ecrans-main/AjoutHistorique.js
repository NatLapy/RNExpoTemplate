import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useParametreStore } from "../../store/ParametreStore";

const AjoutHistorique = () => {
  const db = useSQLiteContext();
  const navigation = useNavigation();

const isFocused = useIsFocused();

  const [montant, setMontant] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const couleur = useParametreStore((state) => state.couleur);
  const taillePolice = useParametreStore((state) => state.taillePolice);
  const langue = useParametreStore((state) => state.langue);

  useEffect(() => {
     if (isFocused) {
    const parent = navigation.getParent();

    if (parent) {
      parent.setOptions({
        title: "Ajout Historique",
        headerStyle: { backgroundColor: couleur },
      });
    }

    navigation.setOptions({
      tabBarStyle: { backgroundColor: couleur },
    });}
  }, [isFocused,navigation,langue, couleur]);

  const enregistrer = async () => {
    if (!montant || isNaN(montant)) {
      Alert.alert("Erreur", "Entrez un montant valide.");
      return;
    }

    try {
      const dateString = date.toLocaleDateString("fr-FR");
      await db.runAsync(
        "INSERT INTO historique (dateAchat, total) VALUES (?, ?)",
        [dateString, parseFloat(montant)],
      );

      Alert.alert("Succès", "Achat enregistré !");
      setMontant(""); 
      navigation.navigate("HistoriqueTab"); 
    } catch (e) {
      console.log("Erreur insertion", e);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Montant de l'achat ($)</Text>
      <TextInput
        style={styles.input}
        value={montant}
        onChangeText={setMontant}
        keyboardType="numeric"
        placeholder="Ex: 45.50"
      />

      <Text style={styles.label}>
        Date : {date.toLocaleDateString("fr-FR")}
      </Text>
      <Button title="Choisir une date" onPress={() => setShowPicker(true)} />

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="ENREGISTRER" color="green" onPress={enregistrer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  label: { fontSize: 16, marginBottom: 5, fontWeight: "bold" },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    fontSize: 18,
    padding: 5,
  },
});

export default AjoutHistorique;
