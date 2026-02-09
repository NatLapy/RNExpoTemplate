import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useEquipeStore } from "../store/equipeStore";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/styles";

const AjoutJoueur = () => {
    const [numero, setNumero] = useState("");
    const [nom, setNom] = useState("");
    const [erreurs, setErreurs] = useState({ numero: "", nom: "" });
    const navigation = useNavigation();

    const ajouterJoueur = useEquipeStore((state) => state.ajouterJoueur);

    const validerFormulaire = () => {
        let erreursTemp = {};
        let valide = true;
        if (
            !Number.isInteger(Number(numero))
        ) // Vérifie si le numéro est un entier
        {
            erreursTemp.numero = "Le numéro doit être une valeur entiere.";
            valide = false;
        } else if (
            numero <= 0 ||
            numero > 99
        ) // Vérifie si le numéro est supérieur à 0 et inférieur ou égal à 99
        {
            erreursTemp.numero = "Le numéro doit être inférieur ou égal à 99.";
            valide = false;
        }

        if (nom.trim() === "") {
            erreursTemp.nom = "Le nom ne peut pas être vide.";
            valide = false;
        }
        setErreurs(erreursTemp);
        return valide;
    };

    const soumettreFormulaire = () => {
        if (validerFormulaire()) {
            const nouveauJoueur = {
                numero: Number(numero), // Convertit le numéro en entier
                nom: nom,
            };

            ajouterJoueur(nouveauJoueur);

            navigation.goBack(); // Retourne à l'écran précédent après l'ajout du joueur
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Nouveau joueur</Text>
            <View style={styles.groupe}>
                <Text style={styles.label}>Numéro du joueur</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex: 12"
                    value={numero}
                    onChangeText={setNumero}
                    keyboardType="numeric"
                />
                {erreurs.numero ? (
                    <Text style={{ color: "red" }}>{erreurs.numero}</Text>
                ) : null}
            </View>

            <View style={styles.groupe}>
                <Text style={styles.label}>Nom du joueur</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex: Michel Laroche"
                    value={nom}
                    onChangeText={setNom}
                />
                {erreurs.nom ? (
                    <Text style={{ color: "red" }}>{erreurs.nom}</Text>
                ) : null}
            </View>
            <View style={styles.boutons}>
                <Button title="Annuler" onPress={() => navigation.goBack()} />
                <Button
                    title="Ajouter le joueur"
                    onPress={soumettreFormulaire}
                />
            </View>
        </View>
    );
};

export default AjoutJoueur;
