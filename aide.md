# AIDE-MÉMOIRE : EXAMEN REACT NATIVE
*Si vous voulez lire le fichier dans vs code telecharger l'extension vscode-pdf (proposé en bas à gauche quand tu ouvre le fichier pdf sur vscode)*
*Si vous avez un IOS oublier pas d'utilise testflight:* https://testflight.apple.com/join/GZJxxfUU
## 2. SQLITE : LE GUIDE COMPLET (CRUD)
*Indispensable pour la persistance locale.*

### Initialisation (dans `App.js`)

```jsx
<SQLiteProvider databaseName="mabase.db" onInit={initDatabase}>
  <Navigation />
</SQLiteProvider>
```

```javascript
const initDatabase = async (db) => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS historique (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      montant REAL,
      date TEXT
    );
  `);
};
```

### Opérations (dans les écrans)

* **Lire tout :** `const result = await db.getAllAsync('SELECT * FROM historique');`
* **Lire un seul :** `const row = await db.getFirstAsync('SELECT * FROM historique WHERE id = ?', [id]);`
* **Ajouter :** `await db.runAsync('INSERT INTO historique (nom, montant) VALUES (?, ?)', [nom, montant]);`
* **Supprimer :** `await db.runAsync('DELETE FROM historique WHERE id = ?', [id]);`
* **Vider la table :** `await db.runAsync('DELETE FROM historique');`

---

## 3. APPELS API (FETCH)
*Récupérer et envoyer des données vers un serveur.*

### GET (Récupérer)

```javascript
const fetchData = async () => {
  setLoading(true);
  try {
    const response = await fetch('[https://api.exemple.com/items](https://api.exemple.com/items)');
    const json = await response.json();
    setData(json);
  } catch (error) {
    Alert.alert("Erreur", "Impossible de contacter le serveur");
  } finally {
    setLoading(false);
  }
};
```

### POST (Envoyer)

```javascript
const sendData = async (objet) => {
  const response = await fetch('[https://api.exemple.com/items](https://api.exemple.com/items)', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(objet),
  });
  if (response.ok) Alert.alert("Succès !");
};
```

---

## 4. FORMULAIRES & VALIDATION
*Pour éviter les données corrompues.*

```jsx
const [montant, setMontant] = useState('');
const [error, setError] = useState('');

const valider = () => {
  if (montant.trim() === '') {
    setError('Le champ ne peut pas être vide');
    return false;
  }
  if (isNaN(montant)) {
    setError('Veuillez entrer un nombre valide');
    return false;
  }
  setError('');
  return true;
};

// Affichage
<TextInput 
  style={[styles.input, error ? styles.inputError : null]}
  keyboardType="numeric"
  onChangeText={setMontant}
/>
{error ? <Text style={styles.errorText}>{error}</Text> : null}
```

---

## 5. CONNECTIVITÉ & ÉTATS RÉSEAU
*Vérifier si l'utilisateur a internet avant de faire un appel API.*

```javascript
import NetInfo from '@react-native-community/netinfo';

const verifierConnexion = () => {
  NetInfo.fetch().then(state => {
    if (!state.isConnected) {
      Alert.alert("Hors ligne", "Cette action nécessite internet.");
    }
  });
};
```

---

## 6. LAYOUT FLEXBOX (TRICKS)
*Pour aligner n'importe quoi en 2 secondes.*

| Objectif | Style CSS |
| :--- | :--- |
| **Centrer tout** | `justifyContent: 'center', alignItems: 'center'` |
| **Boutons côte à côte** | `flexDirection: 'row', justifyContent: 'space-around'` |
| **Prendre tout l'écran** | `flex: 1` |
| **Espace entre items** | `gap: 10` ou `marginVertical: 5` |
| **Superposer (Badge)** | `position: 'absolute', top: 0, right: 0` |

---

## 7. GESTION DES IMAGES

* **Locale :** `source={require('./assets/image.png')}`
* **Web (URL) :** `source={{ uri: 'https://...' }}` *(Nécessite un style défini, ex: `style={{ width: 50, height: 50 }}`)*

---

## 8. COMPOSANTS "UX" INDISPENSABLES

* **Pull to Refresh :** `<FlatList onRefresh={getData} refreshing={loading} ... />`
* **Feedback tactile :** Utiliser `Pressable` avec `style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}`.
* **Zone sécurisée :** Utiliser `SafeAreaView` pour éviter l'encoche (notch) sur iPhone.
* **Confirmation :** `Alert.alert("Titre", "Message", [{text: "Non"}, {text: "Oui", onPress: ...}])`.

---

## 9. CONTEXT API (ÉTAT GLOBAL)
*Partager des données (ex: thème, utilisateur) entre plusieurs écrans sans passer les props manuellement.*

### 1. Création (ex: `ThemeContext.js`)
```javascript
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. Enveloppement (dans `App.js`)
```jsx
// Envelopper l'application ou la zone qui a besoin du contexte
<ThemeProvider>
  <Navigation />
</ThemeProvider>
```

### 3. Utilisation (dans n'importe quel écran enfant)
```javascript
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// Dans le composant :
const { theme, setTheme } = useContext(ThemeContext);
```

---

## RAPPEL POUR LES IMPORTS

```javascript
import React, { useState, useEffect, useContext, createContext } from 'react';
import { View, Text, Pressable, TextInput, FlatList, Alert, Image, ActivityIndicator } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
```