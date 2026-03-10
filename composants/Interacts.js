import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const Interacts = () => {
  //Affichage conditionnelle
  const [visible, setVisible] = useState(true);
  const [couleur, setCouleur] = useState("red");

  return (
    <View>
      <Text style={{ color: "blue" }}>Texte bleu</Text>

      <Text style={[styles.un, styles.deux, { backgroundColor: "grey" }]}>
        Texte avec style multiple
      </Text>

      <Button title="CLiquez ici" color={"green"} />

      <Image source={require("../assets/favicon.png")} />

      <Image
        source={{
          uri: "https://ih1.redbubble.net/image.3311145907.3109/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        }}
        style={{ height: 150, width: 150 }}
      />

      <TouchableOpacity
        activeOpacity={0.3}
        style={{ backgroundColor: "yellow" }}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <Pressable style={{ backgroundColor: "pink" }}>
        <Text>Pressable</Text>
      </Pressable>

      <View>
        <Text>Affichage conditionnelle</Text>
        <Button
          title="Afficher / Masquer"
          onPress={() => setVisible(!visible)}
        />
        {visible === true ? (
          <Text>La zone est visible</Text>
        ) : (
          <Text>La zone est masquée</Text>
        )}
      </View>

      <View>
        <Button
          title="Afficher / Masquer"
          onPress={() => setVisible(!visible)}
        />
        {visible === true && <Text>Les conditions &&</Text>}
      </View>

      <Text style={couleur === "red" ? {color:couleur} : {color:"green"}}>
        Texte coloré style avec conditions
      </Text>
    </View>
  );
};

export default Interacts;

const styles = StyleSheet.create({
  un: {
    fontSize: 25,
  },
  deux: {
    color: "red",
  },
});
