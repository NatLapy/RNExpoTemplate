import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSessionStore } from "../../store/sessionStore"; // Vérifie bien le chemin

const Connexion = () => {
  // On récupère la fonction connexion du store Zustand
  const seConnecter = useSessionStore((state) => state.connexion);

  const handleConnexion = () => {
    // 1. On change l'état global
    seConnecter();
    
    // NOTE : Pas besoin de navigation.navigate("app") !
    // Comme ton RootStack utilise une condition "if", 
    // React Navigation change d'écran tout seul dès que l'état change.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page de connexion</Text>
      <Pressable 
        onPress={handleConnexion}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#2196F3' },
          styles.button
        ]}
      >
        <Text style={styles.buttonText}>SE CONNECTER</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  button: { padding: 15, borderRadius: 8, minWidth: 200, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});

export default Connexion;