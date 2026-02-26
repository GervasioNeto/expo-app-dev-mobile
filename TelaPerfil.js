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
import { Image, ScrollView } from "react-native-web";
import { styles } from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaPerfil({ navigation }) {
  return (
    <View style={styles.container_tela_perfil}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("./assets/snack-icon.png")}
              style={styles.avatar}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
              <MaterialCommunityIcons name="camera" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Perfil</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>Gervásio Neto</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>gervasiolopesn@gmail.com</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.field}>
            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.value}>(85) 99999-9999</Text>
          </View>
        </View>

        {/* Botão na parte inferior */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.botao_perfil}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.texto_botao_perfil}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
