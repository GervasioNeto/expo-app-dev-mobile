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
function TelaContato({ navigation }) {
  const [text_nome, setText_nome] = useState("");
  const [text_email, setText_email] = useState("");
  const [message, setMessage] = useState("");

  const salvarContato = async () => {
    try {
      const contato = {
        id: Date.now(),
        nome: text_nome,
        email: text_email,
        mensagem: message,
      };
      // await AsyncStorage.setItem("@contato", JSON.stringify(contato));
      // Alert.alert("Sucesso", "Mensagem salva localmente!");

      const contatosSalvos = await AsyncStorage.getItem("@contatos");

      let listaContatos = contatosSalvos ? JSON.parse(contatosSalvos) : [];

      listaContatos.push(contato);

      await AsyncStorage.setItem("@contatos", JSON.stringify(listaContatos));

      Alert.alert("Sucesso", "Contato salvo!");

      console.log("Contato salvo:", JSON.stringify(contato));
      setText_nome("");
      setText_email("");
      setMessage("");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar os dados");
      console.error(error);
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
