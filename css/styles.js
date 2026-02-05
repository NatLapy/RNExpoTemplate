import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
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

    texte: {
        color: "red",
        fontSize: 20,
    },

    titre: {
        color: "blue",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
});
