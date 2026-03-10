import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
// import i18next from "i18next";
 
 
export const useParametreStore = create(
  persist(
    (set) => ({
 
      couleur: "#143366",
      taillePolice: 20,
      typeTrie: "date",
      langue: "fr",
 
      modifierCouleur: (nouvelleCouleur) =>
        set((state) => ({ couleur: nouvelleCouleur })),
 
      modifierTaillePolice: (nouvelleTaille) =>
        set((state) => ({ taillePolice: nouvelleTaille })),
 
      modifierTypeTrie: (nouveauType) =>
        set((state) => ({ typeTrie: nouveauType })),
 
    //   modifierLangue: (nouvelleLangue) => {
    //     i18next.changeLanguage(nouvelleLangue);
    //     set((state) => ({
    //       langue: nouvelleLangue
    //     }));
       
    //   }
    }),
    {
      name: "parametre-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
 