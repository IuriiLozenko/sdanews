import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginPage from './Components/LoginPage/LoginPage';
import ExcerciseForm from './Components/ExcerciseForm/ExcerciseForm';

function App () {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  const [usersFirstName, setUsersFirstName] = useState<string>("");
  console.log(usersFirstName);
  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar setAvatarClicked={setAvatarClicked} />
        <ExcerciseForm setUsersFirstName={setUsersFirstName} />
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          <Route path="/" element={<h1>To jest pusty url</h1>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;

// Task 1 19.01.2023
// 1. Stwórz komponent ExerciseForm.
// 2. Ten komponent ma wyświetlać formularz z dwoma inputami (TextField (MUI)), jeden 
//na imie, drugi na nazwisko, dodaj też Button (MUI) z typem submit. Zaimportuj useForm i obsłuż formularz.
// 3. W App.tsx stwórz stan usersFirstName, otypuj go na string, wartość początkowa "".
// 4. Wyświetl ExerciseForm w App.tsx (statycznie/dynamicznie, nie ma to znaczenia), 
//przekaż do ExcerciseForm funkcję aktulizującą stan usersFirstName. Nie zapomnij o interface w ExerciseForm
// 5. Wywołuj funkcję aktulizującą stan usersFirstName w własnoręcnie napisanym handlerze, wrzucając do 
//stanu TYLKO IMIE użytkownika.
// 6. Zrób console.log(stan) w App.tsx żeby sprawdzić czy działa.