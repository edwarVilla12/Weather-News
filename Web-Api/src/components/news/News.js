import React , {useContext} from 'react';
import {NewsContext} from '../../hooks/NewsContext';
import NewsArticle from './NewsArticle';

// component used to deploy the news
function News(props){

    // Create a new context
    const {data}  = useContext(NewsContext);
    
    return(
        <div>
            <h1 className="head__Text">Stay informed with the latest news </h1>
             <div className="all__news">
                {data 
                    ? data.articles.map((news) => (
                    <NewsArticle data = {news} key={news.url} />
                    ))
                    :   'Loading'}    
            </div>
        </div>
    );        
}

export default News;