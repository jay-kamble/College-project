import React from 'react'
import { Grid, Grow, Typograpy } from '@material-ui/core'

import  useStyles from './style.js'
import NewsCard from '../NewsCard/NewsCard.js';

const NewsCards = ({ articles }) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {articles.map((articles, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard article={articles} i={i} />
          </Grid>
        ))}
        </Grid>
    </Grow>
  )
}

export default NewsCards
