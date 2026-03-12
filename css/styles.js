import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carte: {
    backgroundColor: "#dd5d82",
    width: 200,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 2,
    elevation: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  titre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  centre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond semi-transparent pour le modal
  },
  modal: {
    margin: 2,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  titreModal: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  groupe: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },


  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#666",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  // --- BOUTONS ---
  btn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  btnConfirm: { backgroundColor: "#28A745" },
  btnCancel: { backgroundColor: "#DC3545" },
  btnNeutral: { backgroundColor: "#007BFF" },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  // --- INPUTS ---
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  // --- CARDS / LISTS ---
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 5,
    borderLeftColor: "#007BFF", // Bordure colorée pour le style
  },
  // --- MODAL ---
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 5,
  },

  // --- FLATLIST / ITEMS ---
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 6, // Espace entre les items
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Délimitation grise claire
    // Ombre légère pour donner du relief
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  // Style pour l'item SÉLECTIONNÉ
  itemSelected: {
    backgroundColor: '#E3F2FD', // Bleu très clair
    borderColor: '#2196F3',     // Bordure bleue foncée
    borderWidth: 2,
  },

  // --- ERREURS ---
  inputError: {
    borderColor: '#DC3545', // Bordure rouge
    borderWidth: 1.5,
  },
  errorText: {
    color: '#DC3545',
    fontSize: 12,
    marginTop: -8,   // Pour coller à l'input
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: '500',
  },
  
  // Petit badge pour mettre en avant une info dans l'item
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: '#EEE',
  }
});

export default styles;
