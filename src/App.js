import React, { useState,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
 
const alanKey = 'f8b90f367a8de45f35763e4fef60a1592e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn(
            {
                key: alanKey,
                onCommand: ({command, articles}) => {
                    if(command === 'newHeadlines'){
                        setNewsArticles(articles);
                    }
                }
            })
    }, [])

    return (
      <div>
      <h1>This is new project</h1>
      <NewsCards articles={newsArticles}/>
      
      </div>
    )
  }

export default App


