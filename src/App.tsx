import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginPage from './Components/LoginPage/LoginPage';
import ExcerciseForm from './Components/ExcerciseForm/ExcerciseForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './helpers/firebaseConfig';
import UserPage from './Components/UserPage/UserPage';

function App () {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  const [usersFirstName, setUsersFirstName] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user){
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar setAvatarClicked={setAvatarClicked} loggedIn={loggedIn} />
        {/* <ExcerciseForm setUsersFirstName={setUsersFirstName} /> */}
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          <Route path="/" element={<h1>To jest pusty url</h1>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage loggedIn={loggedIn}/>} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;

