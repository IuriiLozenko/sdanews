import { Typography, List } from "@mui/material";
import ArticleComponent from "../Article/Article";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getArticlesAsync, selectArticles } from "../../slices/articles.slice";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  const articlesFromStore = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticlesAsync());
  }, []);

  const typographyStyles = { fontSize: "2rem", mt: ".8rem" };

  return (
    <>
      <Typography variant="h2" align="center" sx={typographyStyles}>
        Today's hottest news:
      </Typography>
      <List sx={{ width: "100%", alignContent: "center" }}>
        {articlesFromStore.map((el, i) => {
          return <ArticleComponent article={el} key={i} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
