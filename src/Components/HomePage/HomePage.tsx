import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/api";
import { Typography, List, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Article from "../Article/Article";

const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

  // 1. useEffect to hook służący do podpinania się pod konkretny moment cyklu życia komponentu.
  // 2. Cykl życia komponentu:
  // a) zamontowanie (wyświetlenie)
  // b) zmiana jakiejś wartości (moment w którym coś w komponencie się zmienia, np. przychodzi jakiś nowy props lub aktualizuje się stan)
  // c) odmontowanie (komponent znika z ekranu)
  // 3. useEffect przyjmuje 2 argumenty:
  // a) funkcja wykonująca się w zadeklarowanym momencie cyklu życia (patrz pkt wyżej)
  // b) lista dependencji (opcjonalny)
  // - brak listy depencji = UE będzie strzelało cały czas jak zwykła funkcja
  // - pusta lista dependencji = strzał tylko przy zamontowaniu

  // yyyy-mm-dd

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  console.log(day, month, year);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${year}-${
          month < 10 ? `0${month}`: month
        }-${day - 1}&apiKey=${API_KEY}`
      )
      .then((data) => {
        console.log(data.data.articles)
        setTodaysArticles(data.data.articles);
      });
  }, []);
  // FETCH + USEEFFECT TO NIE JEST NAJLEPSZY SPOSÓB NA KOMUNIKACJE Z API W REACTCIE, ALTERNATYEWA: REACT QUERY, TEN SPOSÓB JEST MIMO WSZYSTKO OK
  // const elementsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", mt: ".8rem" }}
      >
        Today's hottest news:
      </Typography>
      <List sx={{ width: "100%", alignContent: "center" }}>
        {todaysArticles.map((el, i) => {
          return <Article article={el} key={i} />;
        })}
      </List>
      {/* {elementsArray.map((el, i, arr) => {
        return <p>{el * 2}</p>
      })} */}
    </div>
  );
};

export default HomePage;

// Task 1 17.01.2023
// 1. Na liście (stanie) todaysArticles odpal metode map, wyświetlaj w niej komponenty Article, jako 
// props article podawaj aktualny element po którym iterujesz (1szy parametr mapa), jako klucz (key) podaj 
// index aktualnego elementu (drugi parametr mapa)