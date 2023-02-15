import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginPage from "./Components/LoginPage/LoginPage";
import ExcerciseForm from "./Components/ExcerciseForm/ExcerciseForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import UserPage from "./Components/UserPage/UserPage";
import { Typography } from "@mui/material";
import SearchPage from "./Components/SearchPage/SearchPage";
import { useAppDispatch } from "./app/hooks";
import { removeUser, setUser } from "./slices/app.slice";
function App() {
  // const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  // const [usersFirstName, setUsersFirstName] = useState<string>("");
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // ta funkcja wykonuje się OD RAZU *PO* zmianie stanu autentykacji
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // rob cos po log in
      //setLoggedIn(true);
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    } else {
      dispatch(removeUser());
    }
  });

  // brak user => zalogowanie => tu zachodzi zmiana obiektu user => wywołanie onAuthStateChanged => user

  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        {/* TODO: uzyc wartosci isLogged ze stora */}
        <Navbar loggedIn={false} />
        {/* <ExcerciseForm setUsersFirstName={setUsersFirstName}/> */}
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;

