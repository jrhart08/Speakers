import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Grid from '@material-ui/core/Grid';

const Album = ({ items, keyBy, Card }) => (
  <Grid container spacing={3}>
    {map((item) => (
      <Grid key={keyBy(item)} item xs={4}>
        <Card item={item} />
      </Grid>
    ))(items)}
  </Grid>
);
Album.propTypes = {
  keyBy: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  Card: PropTypes.func.isRequired,
};
export default Album;
