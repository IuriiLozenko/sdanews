import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAk5orI-dxCb6RCS6PvvL2T2SKKTY0H0-I",
  authDomain: "project-react-id.firebaseapp.com",
  projectId: "project-react-id",
  storageBucket: "project-react-id.appspot.com",
  messagingSenderId: "441990334078",
  appId: "1:441990334078:web:32e0f2f6611ee580adfa2f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)
