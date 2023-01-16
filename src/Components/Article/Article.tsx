import React from 'react';

interface ArticleObj {
    title: string;
    url: string;
    urlToImage: string;
}

interface ArticleProps {
    article: ArticleObj;
    key: number
};

const Article = ({ article, key}: ArticleProps) => {
    return <div>Article</div>;
};

export default Article;