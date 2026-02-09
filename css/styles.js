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
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 8,
    },
    boutons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default styles;
