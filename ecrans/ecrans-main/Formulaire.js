import {
  View,
  Text,
  Button,
  Pressable,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";


import dayjs from "dayjs";
import DatePicker from "react-native-ui-datepicker";


export default function Formulaires({}) {


  const navigation = useNavigation();

  const [montant, setMontant] = useState(0);
  const [description, setDescription] = useState("");
  const [lieu, setLieu] = useState("");
  const [date, setDate] = useState(dayjs());

  const [erreurs, setErreurs] = useState({});
  const [message, setMessage] = useState("");

  const valider = () => {
    const tempsErreurs = {};
    if (description === "") {
      tempsErreurs.erreurDescription = "La description est obligatoire";
    }
    if (date === "") {
      tempsErreurs.erreurDate = "La date est obligatoire";
    }
    if (lieu === "") {
      tempsErreurs.erreurLieu = "Le lieu est obligatoire";
    }
    if (Number(montant) <= 0) {
      tempsErreurs.erreurMontant = "Le montant doit être supérieur à 0";
    }
    if (Number(montant) === null) {
      tempsErreurs.erreurMontant = "Ce champ est obligatoire";
    }

    setErreurs(tempsErreurs);

    return Object.keys(tempsErreurs).length === 0;
  };

  const soumettre = () => {
    setMessage("");
    if (valider()) {
      Alert.alert(
        "Demande de confirmation :",
        "Validez-vous ces nouveaux paramètres ?",
        [
          { text: "Annuler", style: "cancel" },
          {
            text: "Ok",
            onPress: () => {
              let nouvDepense = {
                id: depenses.length + 1,
                description: description,
                montant: Number(montant),
                lieu: lieu,
                date: date.format("DD/MM/YYYY"),
              };

              setMontant(0);
              setDescription("");
              setLieu("");
              setDate(dayjs());
              setErreurs({});

              setErreurs({});
              navigation.navigate("Accueil");
            },
          },
        ],
      );
    }
  };

   useEffect(() => {
      navigation.setOptions({
        title: "Formulaire d'ajout de dépenses",
        
      });
    }, [navigation]);


  return (
    <View style={styles.containerFormulaire}>
      <TextInput
        keyboardType="numeric"
        numberOfLines={3}
        maxLength={50}
        placeholder="Montant"
        style={styles.input}
        onChangeText={setMontant}
        value={montant}
      />
      <Text>{erreurs.erreurMontant}</Text>

      <TextInput
        numberOfLines={3}
        maxLength={50}
        placeholder="Description"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />
      <Text>{erreurs.erreurDescription}</Text>

      <TextInput
        numberOfLines={3}
        maxLength={50}
        placeholder="Lieu"
        style={styles.input}
        onChangeText={setLieu}
        value={lieu}
      />
      <Text>{erreurs.erreurLieu}</Text>

      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Date choisie : {date.format("DD/MM/YYYY")}
      </Text>

      <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10 }}>
        <DatePicker
          mode="single"
          date={date}
          onChange={(params) => setDate(dayjs(params.date))}
        />
      </View>
      <Text>{erreurs.erreurDate}</Text>

      <Button title="Valider" onPress={soumettre} />

      <Text>{message}</Text>
    </View>
  );
}
