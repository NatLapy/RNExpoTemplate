import './gesture-handler'; 
import { SQLiteProvider } from 'expo-sqlite';
import {Navigation} from './navigation/navigation';

export default function App() {
  
  const initDB = async (db) => {
    try {
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS historique (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          dateAchat TEXT NOT NULL,
          total REAL NOT NULL
        );
      `);
      console.log("DB prête");
    } catch (e) {
      console.log("Erreur DB", e);
    }
  };

  return (
    <SQLiteProvider databaseName="historique.db" onInit={initDB}>
      <Navigation />
    </SQLiteProvider>
  );
}