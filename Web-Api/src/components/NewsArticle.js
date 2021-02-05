import React from 'react';

function NewsArticle ({data}){
   
    return <div className="news">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
      {/*}  {source < 60 ? 
        <span className="news__author">{data.author}</span> 
        : ' '} */}
        <br />
        <span className="news__published ">{data.publishedAt}</span>
        <span className="news__source">{data.sourse}</span>
    </div>;
}

export default NewsArticle;