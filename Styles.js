import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d4ff",
    padding: 1,
    alignItems: "center",
  },
  container_infos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    color: "#690b6e",
    fontWeight: "bold",
    margin: 5,
    fontSize: 26,
    textAlign: "center",
    marginTop: 20,
  },
  nome: {
    color: "#690b6e",
    fontSize: 20,
    textAlign: "center",
  },
  idade: {
    fontSize: 20,
    textAlign: "center",
  },
  profissao: {
    fontSize: 20,
    textAlign: "center",
  },
  campoMain: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#690b6e",
  },
  campoContent: {
    textAlign: "center",
    fontSize: 20,
  },
  socials: {
    flex: 1,
    justifyContent: "center",
  },
  container_redes: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  texto_apresentacao: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 15,
  },
  texto: {
    color: "purple",
    fontWeight: "bold",
  },
  texto_instituicao: {
    color: "blue",
    textDecorationLine: "underline",
  },
  imagem: {
    width: 180,
    height: 180,
    resizeMode: "cover",
    borderRadius: 300,
    borderWidth: 4,
    borderColor: "purple",
  },
  botao: {
    backgroundColor: "purple",
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  botao_lista_contatos: {
    backgroundColor: "purple",
    width: 130,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  texto_botao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  texto_botao_contato: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  container_contato: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e1d4ff",
  },
  container_tela_perfil: {
    backgroundColor: "#0f2340",
  },
  container_icone_voltar_contato: {
    alignItems: "flex-start",
  },
  view_texto_contato: {
    alignItems: "center",
  },
  texto_contato: {
    color: "purple",
    fontWeight: "bold",
    padding: 10,
    fontSize: 25,
  },
  input_contato: {
    height: 40,
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  input_contato_scrowlView: {
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  textarea: {
    height: 150,
    textAlignVertical: "top",
    marginBottom: 15,
  },
  botao_perfil: {
    backgroundColor: "#6C63FF",
    width: 120,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  texto_botao_perfil: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  background_foto_perfil: {
    justifyContent: "center",
    width: "100%",
    height: "50%",
    alignItems: "center",
    backgroundColor: "blue",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 190,
    backgroundColor: "#0f2340",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

  avatarWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#ddd",
  },
  cameraButton: {
    position: "absolute",
    right: -6,
    bottom: -6,
    backgroundColor: "#ff5252",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    // sombra
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },

  infoCard: {
    width: "92%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginTop: 12,
    // sombra
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  field: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 12,
    color: "#8b93a7",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  value: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "600",
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#eceef5",
    marginVertical: 6,
  },

  actions: {
    width: "100%",
    height: 200,
    alignItems: "center",
    marginTop: 50,
  },

  botao_perfil: {
    backgroundColor: "#6C63FF",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    // sombra
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  texto_botao_perfil: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
