import axios from "axios";
import { API_KEY } from "../../../helpers/api";
import { Article } from "../../../slices/articles.slice";

export interface NewsapiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getArticlesFromServer = async (): Promise<Article[]> => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  try {
    const response = await axios.get<NewsapiResponse>(
      `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${year}-${
        month < 10 ? `0${month}` : month
      }-${day - 1}&apiKey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};
