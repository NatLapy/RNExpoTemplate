import { create } from "zustand";
export const useSessionStore = create((set) => ({
  isConnecte: false,
  connexion: () => set((state) => ({ isConnecte: true })),
  deconnexion: () => set((state) => ({ isConnecte: false })),
}));
