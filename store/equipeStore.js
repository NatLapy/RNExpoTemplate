import { create } from "zustand";

export const useEquipeStore = create((set) => ({
    nomEquipe: "Les Braves",
    joueurs: [],
    modifierNomEquipe: (nouveauNomEquipe) =>
        set((state) => ({
            nomEquipe: nouveauNomEquipe,
        })),
    ajouterJoueur: (nouveauJoueur) =>
        set((state) => ({
            joueurs: [...state.joueurs, nouveauJoueur],
        })),
    supprimerJoueur: (joueur) =>
        set((state) => ({
            joueurs: state.joueurs.filter((j) => j.numero != joueur.numero),
        })),
    modifierNomJoueur: (joueurModifie) =>
        set((state) => ({
            joueurs: state.joueurs.map((j) =>
                j.numero == joueurModifie.numero
                    ? { ...j, nom: joueurModifie.nom }
                    : j,
            ),
        })),
}));
