import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TelaListaContatos() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    carregarContatos();
  }, []);

  const carregarContatos = async () => {
    try {
      const dados = await AsyncStorage.getItem("@contatos");
      console.log("Dados carregados:", dados);
      if (dados) {
        setContatos(JSON.parse(dados));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.email}</Text>
            <Text>{item.mensagem}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum contato salvo ainda.</Text>}
      />
    </View>
  );
}

export default TelaListaContatos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
