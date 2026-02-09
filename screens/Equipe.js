import {
    Button,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useEquipeStore } from "../store/equipeStore";
import { FlatList } from "react-native";
import RenderItem from "../components/RenderItem";
import { useEffect, useState } from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/styles";

const Equipe = () => {
    const [visible, setVisible] = useState(false);
    const [nouveauNom, setNouveauNom] = useState("");
    const [joueurSelectionne, setJoueurSelectionne] = useState(null);
    const [erreur, setErreur] = useState("");

    const navigation = useNavigation();

    const nomEquipe = useEquipeStore((state) => state.nomEquipe);
    const modifierNomJoueur = useEquipeStore(
        (state) => state.modifierNomJoueur,
    );

    useEffect(() => {
        navigation.setOptions({
            title: nomEquipe,
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate("ajoutJoueur")}>
                    <Ionicons name="person-add" size={24} color="#fff" />
                </Pressable>
            ),
        });
    }, [navigation]);

    const ouvrirModal = (joueur) => {
        setNouveauNom(joueur.nom); // Pré-remplit le champ de saisie avec le nom actuel du joueur
        setJoueurSelectionne(joueur); // Stocke le joueur sélectionné dans l'état
        setVisible(true);
    };

    const validerFormulaire = () => {
        if (nouveauNom.trim() === "") {
            setErreur("Le nom ne peut pas être vide.");
            return false;
        }
        setErreur("");
        return true;
    };

    const soumettreFormulaire = () => {
        if (validerFormulaire()) {
            const joueurModifie = {
                numero: joueurSelectionne.numero,
                nom: nouveauNom,
            };
            modifierNomJoueur(joueurModifie);
            setVisible(false);
            setNouveauNom("");
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={useEquipeStore((state) => state.joueurs)}
                keyExtractor={(item) => item.numero}
                renderItem={({ item }) => (
                    <RenderItem item={item} ouvrirModal={ouvrirModal} />
                )} // Passe la fonction ouvrirModal en prop
            />

            <Modal visible={visible} transparent={true}>
                <View style={styles.centre}>
                    <View style={styles.modal}>
                        <Text style={styles.titreModal}>
                            Modification du nom de joueur
                        </Text>
                        <View style={styles.groupe}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nouveau nom"
                                value={nouveauNom}
                                onChangeText={setNouveauNom}
                            />
                            {erreur ? (
                                <Text style={{ color: "red" }}>{erreur}</Text>
                            ) : null}
                        </View>
                        <View style={styles.boutons}>
                            <Button
                                title="Annuler"
                                onPress={() => setVisible(false)}
                            />
                            <Button
                                title="Valider"
                                onPress={soumettreFormulaire}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Equipe;
