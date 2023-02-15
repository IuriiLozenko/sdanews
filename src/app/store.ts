import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import articlesReduces from "./../slices/articles.slice";
import appReduces from "./../slices/app.slice";

export const store = configureStore({
  reducer: {
    articles: articlesReduces,
    app: appReduces,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
