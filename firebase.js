import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6tTxZY4TU0qKTB1Q-F5p_Yt62-khk5j8",
  authDomain: "pro-demo-537da.firebaseapp.com",
  projectId: "pro-demo-537da",
  storageBucket: "pro-demo-537da.appspot.com",
  messagingSenderId: "656607994124",
  appId: "1:656607994124:web:5e224515ee6ca84f2fe929"
};

const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
auth.useDeviceLanguage();
