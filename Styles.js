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
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 300,
    borderWidth: 3,
    borderColor: "purple",
  },
});

// export default styles;
