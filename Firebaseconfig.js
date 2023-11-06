
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';       
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 


const firebaseConfig = {
  apiKey: "AIzaSyCzaEyTiSSB_GuizNLIccdmiHisXR9Nu5w",
  authDomain: "app-ban-hang-4f072.firebaseapp.com",
  projectId: "app-ban-hang-4f072",
  storageBucket: "app-ban-hang-4f072.appspot.com",
  messagingSenderId: "678089918941",
  appId: "1:678089918941:web:2f1e7f6d03f5419ad48e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const authentication = getAuth(app, auth)
const database = getFirestore()
// const database = getFirestore(app)
//nếu sai có thể dùng dòng 26 thử

export {authentication, database};

