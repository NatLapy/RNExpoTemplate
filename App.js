import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from "./css/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}