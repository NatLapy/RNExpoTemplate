import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/Styles";
import UserList from "../Components/UserList";

const Accueil = ({route}) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>{route.params?.message}</Text>
            <UserList />
        </View>
    );
};
export default Accueil;
