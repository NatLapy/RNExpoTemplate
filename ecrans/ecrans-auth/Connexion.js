import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Connexion = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Page de connexion</Text>
      <Pressable onPress={() => navigation.navigate("main")}>
        <Text>Se connecter</Text>
      </Pressable>
    </View>
  );
};
export default Connexion;
