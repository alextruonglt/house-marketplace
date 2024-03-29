import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZRbH05rf1sm6ukOnVR_o02h3wGYXrEZU",
  authDomain: "house-marketplace-app-d0e6e.firebaseapp.com",
  projectId: "house-marketplace-app-d0e6e",
  storageBucket: "house-marketplace-app-d0e6e.appspot.com",
  messagingSenderId: "369749904903",
  appId: "1:369749904903:web:bc38f79ea900b85df8a4a2",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
