import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const CardMedia150 = styled(CardMedia).attrs({ image: 'http://place-puppy.com/400x400' })`
  height: 150px;
`;

const EngagementCard = ({ item }) => (
  <Card>
    <CardActionArea>
      <CardMedia150 />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.talkName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {JSON.stringify(item, undefined, 2)}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions />
  </Card>
);
EngagementCard.propTypes = {
  item: PropTypes.shape({
    talkName: PropTypes.string.isRequired,
  }).isRequired,
};
export default EngagementCard;
