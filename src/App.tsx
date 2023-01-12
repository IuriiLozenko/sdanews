import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';



function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  console.log(avatarClicked);
  return (
    <div className="App">
      <Navbar setAvatarClicked={setAvatarClicked} />
      <HomePage />
    </div>
  );
}

export default App;
// TASK 1 11.01.2023
// 1. Stwórz stan avatarClicked w App.tsx. Wartość początkowa: false, typ useState: boolean.
// 2. Przekaż zmienną stanową i funkcję aktualizującą stan do komponentu Navbar.
// 3. W komponencie Navbar stwórz odpowiedni interface i odbierz propsy.
// 4. Przy kliknięciu na avatar: jeżeli stan avatarClicked jest ustawiony na false to zmień na true. 
//  Jeżeli jest ustawiony na true to zmień na false. Stwórz do tego odpowiednią funkcję i przypisz ją do onClicka na avatarze.