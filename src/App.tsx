import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginForm from './Components/LoginForm/LoginForm';
import LoginPage from './Components/LoginPage/LoginPage';
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  return (
    <div className="App">
      <BrowserRouter>
        {/*STATIC*/}
        <Navbar setAvatarClicked={setAvatarClicked} />
        {/*STATIC*/}
        {/*DYNAMIC*/}
        <Routes>
          <Route path="/" element={<h1>This is empty URL</h1>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
        {/*DYNAMIC*/}
        {/*STATIC*/}
        {/*STATIC*/}
      </BrowserRouter>
    </div>
  );
}

export default App;

//TASK 16.01.2023
// 1. Stwórz komponent Article.tsx
// 2. Komponent Article będzie przyjmował 2 propsy: article oraz key. Prop article to
// obiekt artykułu pochodządzy z API a key to po prostu liczba. Stwórz interface dla
// obiektu typu article, nazwij go ArticleObj, w środku: url to string, urlToImage to 
//string, title to string. Sam interface użyj do otypowania propsów w Article, przyjmij je.


//Part 2
// 3. JSX:
// - wszystko ma być obwinięte w komponent ListItem (MUI)
// - w środku ListItem wszystko ma być obwinięte 
//komponentem Card (MUI), props komponentu Card: 
//variant na outlined, w sx'ach margines dolny na 10px
// - w środku Card wszystko obwinięte tagiem a (zwykły 
//anchor z htmla), props: href na url z artykułu który zostaw 
//przekazany propsem do Article.tsx, target na __blank, w 
//style textDecoration none
// - w środku <a> ma się znaleźć tag img (zwykły 
//htmlowy) z src ustawionym na urlToImage z artykułu z 
//propsów, alt ustawiony na title artykułu z propsów i w 
//style width ustawione na 100%
// - obok tagu img ma się znaleźć komponent 
//ListItemText (z MUI) w sx'ach color black, mx 5%. W 
//środku ListItemText wyświetl tytuł artykułu z propsów.