import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { getArticlesFromServer } from "../services/api/articles/articles.service";

// Kontrakt danych o artykułach
export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ArticleSource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticleSource {
  id: string;
  name: string;
}

// Definicja stanu Slice'a
export interface ArticlesState {
  data: Article[];
}

const articlesMock: Article[] = [
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mat Smith",
    title:
      "The Morning After: A Japanese restaurant combats 'sushi terrorism' with AI cameras",
    description:
      'Many people in Japan have been outraged by a recent trend dubbed "sushi terrorism." Videos across social media show people carrying out all kinds of unhygienic acts, like licking the spoon for a container of green tea powder. Another video, which has more tha…',
    url: "https://www.engadget.com/the-morning-after-a-japanese-restaurant-combats-sushi-terrorism-with-ai-cameras-121542434.html",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2023-02/1ffa7a30-ab91-11ed-bfff-f3704ee0bfa1",
    publishedAt: "2023-02-13T12:15:42Z",
    content:
      'Many people in Japan have been outraged by a recent trend dubbed "sushi terrorism." Videos across social media show people carrying out all kinds of unhygienic acts, like licking the spoon for a cont… [+3237 chars]',
  },
];

const initialState: ArticlesState = {
  // data: []
  data: articlesMock,
};

export const getArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const data = await getArticlesFromServer();
    return data;
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    // brak reducerów synchronicznych dla obiektu artykułów
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesAsync.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getArticlesAsync.rejected, (state) => {
        state.data = [];
      });
  },
});

export const {} = articlesSlice.actions;

// Selektory
export const selectArticles = (state: RootState): Article[] =>
  state.articles.data;

export default articlesSlice.reducer;
