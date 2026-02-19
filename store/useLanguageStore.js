import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export const useLanguageStore = create(
    persist(
        (set) => ({
            language: "fr",
            modifyLanguage: (newLanguage) => {
                i18next.changeLanguage(newLanguage);
                set((state) => ({
                    language: newLanguage,
                }));
            },
        }),
        {
            name: "language-storage",
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
