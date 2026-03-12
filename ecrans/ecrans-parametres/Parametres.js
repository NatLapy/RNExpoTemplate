import {
  View,
  Text,
  FlatList,
  Pressable,
  Button,
  StyleSheet,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useParametreStore } from "../../store/ParametreStore";
// import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useSessionStore } from "../../store/sessionStore";

const Parametres = () => {
  // const { t } = useTranslation();
  const navigation = useNavigation();

  const couleurOption = [
    { id: 1, couleur: "#228560" },
    { id: 2, couleur: "#143366" },
    { id: 3, couleur: "#630F37" },
  ];

  const tailleOption = [
    { id: 1, valeur: 16, taille: "petit" },
    { id: 2, valeur: 20, taille: "moyen" },
    { id: 3, valeur: 24, taille: "grand" },
  ];

  const couleur = useParametreStore((state) => state.couleur);
  const modifierCouleur = useParametreStore((state) => state.modifierCouleur);
  const [couleurChoisie, setCouleurChoisie] = useState(couleur);

  const taillePolice = useParametreStore((state) => state.taillePolice);
  const modifierTaillePolice = useParametreStore(
    (state) => state.modifierTaillePolice,
  );
  const [tailleChoisie, setTailleChoisie] = useState(taillePolice);

  const modifierTypeTrie = useParametreStore((state) => state.modifierTypeTrie);

  const langue = useParametreStore((state) => state.langue);
  //const modifierLangue = useParametreStore((state) => state.modifierLangue);

  const deconnexion = useSessionStore((state) => state.deconnexion);

  useEffect(() => {
    modifierCouleur(couleurChoisie);
  }, [couleurChoisie]);

  useEffect(() => {
    modifierTaillePolice(tailleChoisie);
  }, [tailleChoisie]);

  useEffect(() => {
    navigation.setOptions({
      title: "parametres",
      headerStyle: { backgroundColor: couleur },
      tabBarStyle: { backgroundColor: couleur },
    });
  }, [langue, couleur]);

  const renderCouleur = ({ item }) => {
    return (
      <Pressable
        style={{
          backgroundColor: item.couleur,
          height: 100,
          width: 100,
          borderColor: "black",
          borderWidth: 2,
          marginHorizontal: 10,
        }}
        onPress={() => setCouleurChoisie(item.couleur)}
      ></Pressable>
    );
  };

  const renderTaille = ({ item }) => {
    return (
      <View>
        <Pressable
          style={{ marginHorizontal: 20 }}
          onPress={() => setTailleChoisie(item.valeur)}
        >
          <Text style={{ fontWeight: "bold" }}>{item.taille}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <Text style={[styles.param, { fontSize: taillePolice }]}>
        {"themeApplication"}
      </Text>
      <View>
        <FlatList
          horizontal
          data={couleurOption}
          keyExtractor={(item) => item.id}
          renderItem={renderCouleur}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "center",
          }}
        />
      </View>

      <Text style={[styles.param, { fontSize: taillePolice }]}>
        {"taillePolice"}
      </Text>
      <FlatList
        horizontal
        data={tailleOption}
        keyExtractor={(item) => item.id}
        renderItem={renderTaille}
        contentContainerStyle={{
          width: "100%",
          justifyContent: "center",
        }}
      />

      <Text style={[styles.param, { fontSize: taillePolice }]}>
        {"trierPar"}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Pressable onPress={() => modifierTypeTrie("date")}>
          <Text>{"dateCreation"}</Text>
        </Pressable>
        <Pressable onPress={() => modifierTypeTrie("alphabetique")}>
          <Text>{"ordreAlphabetique"}</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 30, alignItems: "center" }}>

        <Pressable
          style={styles.buttonDeconnecter}
          onPress={() => deconnexion()}
        >
          <Text style={styles.buttonText}>SE DÉCONNECTER</Text>
        </Pressable>
      </View>

      {/*       <View>
        <Text style={[styles.param, { fontSize: taillePolice }]}>
          {"modifierLangue"}
        </Text>
        <Switch
          value={langue === "fr"}
          onValueChange={() => {
            modifierLangue(langue === "fr" ? "en" : "fr");
          }}
        />
      </View> */}
    </View>
  );
};

export default Parametres;

const styles = StyleSheet.create({
  param: {
    fontWeight: "bold",
    margin: 10,
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 20 },
  buttonDeconnecter: {
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
