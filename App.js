import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Importação das telas
import TelaInfo from "./TelaInfo";
import TelaContato from "./TelaContato";
import TelaPerfil from "./TelaPerfil";
import TelaListaContatos from "./TelaListaContatos";
// Criação do Stack Navigator
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaInfo} />
        <Stack.Screen name="Contato" component={TelaContato} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
        <Stack.Screen name="ListaContatos" component={TelaListaContatos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
