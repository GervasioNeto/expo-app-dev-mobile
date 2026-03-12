import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "unifor-mobile-aulas.firebaseapp.com",
  projectId: "unifor-mobile-aulas",
  storageBucket: "unifor-mobile-aulas.firebasestorage.app",
  messagingSenderId: "764491245626",
  appId: "1:764491245626:web:5ab22b74e189dd3e68ed03",
  measurementId: "G-F7NY2ES8S2",
};

// Lógica de inicialização corrigida para a versão nova
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicializa o Firestore
const db = getFirestore(app);

export { db };
