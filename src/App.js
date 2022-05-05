import React, { useState,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import classNames from 'classnames';
import useStyles from './style.js'
 
const alanKey = 'f8b90f367a8de45f35763e4fef60a1592e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();
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
     <div className={classes.logoContainer}>
        <img src='https://opennews.org/media/img/opennews_logo_share.png'className={classes.logo} alt="logo" />
     </div>
      <NewsCards articles={newsArticles}/>
      
      </div>
    )
  }

export default App


