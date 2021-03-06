import React, { useState,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './style.js'
import wordsToNumbers from 'words-to-numbers';
import { Typography } from '@material-ui/core';

const alanKey = 'f8b90f367a8de45f35763e4fef60a1592e956eca572e1d8b807a3e2338fdd0dc/stage';



const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn(
            {
                key: alanKey,
                onCommand: ({command, articles, number}) => {
                    if(command === 'newHeadlines'){
                        setNewsArticles(articles);
                        setActiveArticle(-1);
                    } else if(command === 'highlight') {
                        setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                    } else if (command === "open") {
                      const parsedNumber =
                        number.length > 2
                          ? wordsToNumbers(number, { fuzzy: true })
                          : number;
                          const article = articles[parsedNumber - 1];

                          if (parsedNumber > articles.length) {
                            alanBtn.playText('Please try that again...');
                          } else if (article) {
                            window.open(article.url, '_blank');
                            alanBtn.playText('Opening...');
                          } else {
                            alanBtn.playText('Please try that again...');
                          }
                    }
                }
            });
    }, []);

    return (
      <div>
     <div className={classes.logoContainer}>
     {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src='https://opennews.org/media/img/opennews_logo_share.png'className={classes.logo} alt="logo" />
     </div>
      <NewsCards articles={newsArticles} activeArticle ={activeArticle}/>
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a className={classes.link} href="https://github.com/jay-kamble" target="_blank"> Jay Kamble</a> -
            <a className={classes.link} href="/"> Suraj Mane</a>
          </Typography>
        </div>
      ) : null}
      </div>
    )
  }

export default App


