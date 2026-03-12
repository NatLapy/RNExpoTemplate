import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useParametreStore } from '../../store/ParametreStore';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";

const Accueil = () => {
  const navigation = useNavigation();
const isFocused = useIsFocused();
  const couleur = useParametreStore((state) => state.couleur);
  const taillePolice = useParametreStore((state) => state.taillePolice);
  const langue = useParametreStore((state) => state.langue);
  

  useEffect(() => {
    if (isFocused) { 
      const parent = navigation.getParent();
      
      if (parent) {
        parent.setOptions({
          title: "Accueil", 
          headerStyle: { backgroundColor: couleur },
          headerShown: true,
        });
      }

      navigation.setOptions({
        tabBarStyle: { backgroundColor: couleur },
      });
    }
  }, [isFocused,navigation, couleur, langue]);

  return (
    <View>
      <Text>Accueil</Text>
    </View>
  )
}

export default Accueil