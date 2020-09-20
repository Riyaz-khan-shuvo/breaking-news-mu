import React, { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-20&sortBy=publishedAt&apiKey=5246413deef946ceb84dffb2176df416')
    .then(res =>res.json())
    .then(data=>setNews(data.articles))
  },[])
  return (
    <div className="App">
      {
        news.map(art=> <News article={art}></News>)
      }
    </div>
  );
}

export default App;
