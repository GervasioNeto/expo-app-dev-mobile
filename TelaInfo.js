import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
// import AssetExample from "./components/AssetExample";
import { Image } from "react-native-web";
import { styles } from "./Styles";

export default function TelaInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imagem}
          source={require("./assets/snack-icon.png")}
        />
      </View>
      <View>
        <Text style={styles.paragraph}>Apresentação</Text>
        <Text style={styles.campoContent}>
          <Text style={styles.campoMain}>Nome: </Text> Gervásio Neto
        </Text>
        <Text style={styles.campoContent}>
          <Text style={styles.campoMain}>Idade: </Text> 28 anos
        </Text>
        <Text style={styles.campoContent}>
          <Text style={styles.campoMain}>Profissão: </Text> Desenvolvedor Web
        </Text>
        <Text style={styles.campoContent}>
          <Text style={styles.campoMain}>Instituição: </Text>
          <Text
            style={styles.texto_instituicao}
            onPress={() => Linking.openURL("https://www.unifor.br")}
          >
            UNIFOR
          </Text>
        </Text>
      </View>

      <View style={styles.container_redes}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/gervasioneto/")
          }
        >
          <MaterialCommunityIcons name="linkedin" size={55} color="#0e76a8" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/gervasioneto")}
        >
          <MaterialCommunityIcons name="github" size={55} color="" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Contato")}
        >
          <Text style={styles.texto_botao}>Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.texto_botao}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao_lista_contatos}
          onPress={() => navigation.navigate("ListaContatos")}
        >
          <Text style={styles.texto_botao_contato}>Lista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
