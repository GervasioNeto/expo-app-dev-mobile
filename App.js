import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
import AssetExample from "./components/AssetExample";
import { Image } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("./assets/snack-icon.png")} />
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
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/gervasioneto/")
          }
        >
          <MaterialCommunityIcons name="linkedin" size={50} color="#0e76a8" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/gervasioneto")}
        >
          <MaterialCommunityIcons name="github" size={50} color="" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
