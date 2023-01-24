import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import { useState, useEffect } from "react"; 
import { List } from "@mui/material";
import axios from 'axios';
import { API_KEY } from '../../helpers/api';
import Article from '../Article/Article';

const SearchPage = () => {

    const [keyword, setKeyword] = useState<string>("");
    const [artciles, setArticles] = useState([]);

    useEffect(() => {
        if (keyword !== "") { 
        axios
      .get(
        `https://newsapi.org/v2/everything?q=${keyword}&from=2023-01-17&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((data) => {
        console.log(data)
        setArticles(data.data.articles)
      });
    }
  }, [keyword]);

  return (
    <>
    <SearchForm setKeyword={setKeyword}/>
    <List 
    sx={{width: "100%", alignContent: "center"}}>
        {artciles.map((el, i) => {
            return <Article article={el} key={i} />
        })}
    </List>
    </>
  );
};

export default SearchPage;

// Task 3 SearchPage 24.01.2023

// 1. Stwórz stan keyword, otypuj na string, wartość początkowa ""
// 2. Stwórz stan articles, wartość początkowa []
// 3. Wywołanie useEffect, do listy dependencji wpisz keyword
// - w UE:
// - stwórz ifa w którym sprawdzisz czy keyword !== ""
// - w tym ifie, strzel axiosem do endpointu 
//`https://newsapi.org/v2/everything?q=${keyword}&from=2023-01-17&language=en&sortBy=popularity&apiKey=${API_KEY}`
// - do axios.get przypnij thena, do parametru tego thena będą wpadały dane z API, wyloguj je do konsoli, 
//   sprawdź co to jest, znajdź listę atrykułow i wrzuć ją do stanu articles
// 4. JSX:
// - wyświetl SearchForm, podając mu w propsach funkcję setKeyword, 
//   pamiętaj żeby przyjąć samego propsa w komponencie SearchForm i stwórz do tego odpowiedni interface
// - List (MUI), sx: width 100%, alignContent center
// - w komponencie List odpal pętle .map() na articles (pkt 2). W pętli wyświetlaj komponenty Article, 
//   pod propsa article podawaj 1szy parametr .mapa() a jako propsa key podawaj drugi parametr .mapa()