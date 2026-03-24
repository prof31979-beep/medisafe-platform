import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCV6_F5OVRD2jGLfJFK2AmXpkUSSQi1ykI",
  authDomain: "medisafe-iot.firebaseapp.com",
  databaseURL: "https://medisafe-iot-default-rtdb.firebaseio.com",
  projectId: "medisafe-iot",
  storageBucket: "medisafe-iot.appspot.com",
  messagingSenderId: "477331177068",
  appId: "1:477331177068:web:d7a734f111484808dce249"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Services
export const auth = getAuth(app)
export const db = getDatabase(app)
