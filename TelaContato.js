import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Styles";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function TelaContato({ navigation }) {
  const [text_nome, setText_nome] = useState("");
  const [text_email, setText_email] = useState("");
  const [message, setMessage] = useState("");

  const salvarContato = async () => {
    if (text_nome && text_email && message) {
      try {
        const novaMensagem = {
          nome: text_nome,
          email: text_email,
          mensagem: message,
          data: new Date().toISOString(),
        };

        console.log("Tentando enviar para Firestore:", db);

        // collection(banco, 'nome_da_colecao')
        const docRef = await addDoc(collection(db, "mensagens"), novaMensagem);

        console.log("Documento escrito com ID: ", docRef.id);

        //Salvando no AsyncStorage também
        const contatosSalvos = await AsyncStorage.getItem("@contatos");
        let listaContatos = contatosSalvos ? JSON.parse(contatosSalvos) : [];
        listaContatos.push({ id: docRef.id, ...novaMensagem }); // Usamos o ID do Firebase
        await AsyncStorage.setItem("@contatos", JSON.stringify(listaContatos));

        Alert.alert("Sucesso", "Mensagem enviada para o Firebase!");
        setText_nome("");
        setText_email("");
        setMessage("");
      } catch (error) {
        console.error("Erro detalhado:", error);
        Alert.alert("Erro ao enviar", error.message);
      }
    } else {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.container_contato}>
      <View style={styles.container_icone_voltar_contato}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={40}
            color="purple"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.view_texto_contato}>
        <Text style={styles.texto_contato}> Entre em Contato Conosco </Text>
      </View>
      <View>
        <TextInput
          style={styles.input_contato}
          placeholder="Digite seu nome..."
          placeholderTextColor="gray"
          value={text_nome}
          onChangeText={setText_nome}
        />
      </View>
      <TextInput
        style={styles.input_contato}
        placeholder="Digite seu email..."
        placeholderTextColor="gray"
        value={text_email}
        onChangeText={setText_email}
      />
      <ScrollView style={styles.input_contato_scrowlView}>
        <TextInput
          placeholder="Escreva a sua mensagem aqui..."
          placeholderTextColor="gray"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={15}
          style={styles.textarea}
        />
      </ScrollView>
      <View>
        <Button title="Enviar" onPress={salvarContato} />
      </View>
    </View>
  );
}
export default TelaContato;
