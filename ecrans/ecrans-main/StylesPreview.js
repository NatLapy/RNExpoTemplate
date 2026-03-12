import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import styles from "../../css/styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useParametreStore } from "../../store/ParametreStore";

const StylePreview = () => {
  // État pour l'item sélectionné
  const [selectedId, setSelectedId] = useState(null);

  // État pour simuler une erreur
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const isFocused = useIsFocused();
  
  
  const testData = [
    { id: '1', label: 'Achat Épicerie', date: '2023-10-01', prix: '85.00$' },
    { id: '2', label: 'Essence', date: '2023-10-02', prix: '60.00$' },
    { id: '3', label: 'Cinéma', date: '2023-10-05', prix: '25.00$' },
    { id: '4', label: 'Pharmacie', date: '2023-10-06', prix: '12.50$' },
  ];

  const navigation = useNavigation();
  const couleur = useParametreStore((state) => state.couleur);

  useEffect(() => {
     if (isFocused) {
    const parent = navigation.getParent();
    if (parent) {
      parent.setOptions({
        title: "Preview des styles",
        headerStyle: { backgroundColor: couleur },
      });
    }
    navigation.setOptions({
      tabBarStyle: { backgroundColor: couleur },
    });}
  }, [isFocused,navigation, couleur]);

  const validerEmail = (texte) => {
    setEmail(texte);
    if (!texte.includes('@')) {
      setError('L\'adresse courriel doit contenir un @');
    } else {
      setError('');
    }
  };

  // --- COMPOSANT POUR CHAQUE ITEM DE LA LISTE ---
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <Pressable 
        onPress={() => setSelectedId(item.id)}
        style={[
            styles.itemContainer, 
            isSelected && styles.itemSelected 
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
            <Text style={{ color: '#666' }}>{item.date}</Text>
          </View>
          <Text style={{ fontWeight: 'bold', color: '#28A745' }}>{item.prix}</Text>
        </View>
      </Pressable>
    );
  };

  // --- TOUT LE CONTENU AU-DESSUS DE LA LISTE ---
  const renderHeader = () => (
    <View>
      <Text style={styles.title}>Composants Preview</Text>

      {/* SECTION BOUTONS */}
      <Text style={styles.sectionTitle}>Boutons</Text>
      <Pressable style={[styles.btn, styles.btnConfirm]}>
        <Text style={styles.btnText}>CONFIRMER / ACCEPTER</Text>
      </Pressable>

      <Pressable style={[styles.btn, styles.btnCancel]}>
        <Text style={styles.btnText}>ANNULER / CANCEL</Text>
      </Pressable>

      {/* SECTION ERREUR */}
      <Text style={styles.sectionTitle}>Input avec Erreur</Text>
      <TextInput 
        style={[styles.input, error ? styles.inputError : null]} 
        placeholder="Entrez votre email"
        value={email}
        onChangeText={validerEmail}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* SECTION MODAL */}
      <Text style={styles.sectionTitle}>Fenêtre surgissante (Modal)</Text>
      <Pressable
        style={[styles.btn, styles.btnNeutral]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnText}>OUVRIR LA MODAL</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Ma FlatList Intelligente</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.container}
        data={testData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selectedId} // Important pour rafraîchir la sélection
        ListHeaderComponent={renderHeader} //contenu du haut
        ListFooterComponent={<View style={{ height: 50 }} />} // Espace en bas de liste
      />

      {/* MODAL  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Attention !</Text>
            <Text style={{ marginBottom: 20, textAlign: "center" }}>
              Ceci est une modal pour confirmer une action importante.
            </Text>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable
                style={[styles.btn, styles.btnCancel, { flex: 1 }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.btnText}>NON</Text>
              </Pressable>
              <Pressable
                style={[styles.btn, styles.btnConfirm, { flex: 1 }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.btnText}>OUI</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StylePreview;