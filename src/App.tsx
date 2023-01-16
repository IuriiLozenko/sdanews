import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  console.log(avatarClicked);
  return (
    <div className="App">
      <BrowserRouter>
        {/*STATIC*/}
        <Navbar setAvatarClicked={setAvatarClicked} />
        {/*STATIC*/}
        {/*DYNAMIC*/}
        <Routes>
          <Route path="/" element={<h1>
            This is empty URL
            </h1>} />
          <Route path='/home' element={<HomePage />} />
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