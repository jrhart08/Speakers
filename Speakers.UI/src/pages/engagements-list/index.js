import React from 'react';
import { get } from 'lodash/fp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import Album from '../../components/Album';
import useEngagements from '../../hooks/useEngagements';
import EngagementCard from './EngagementCard';

import { FabX } from './styles';

const EngagementsList = () => {
  const engagements = useEngagements();

  return (
    <>
      <Grid container spacing={3} justify="center" align="top">
        <Grid item xs={12}>
          <Typography align="center">
        Speaking Engagements
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Album items={engagements} Card={EngagementCard} keyBy={get('id')} />
        </Grid>
      </Grid>
      <FabX>
        <AddIcon />
      </FabX>
    </>
  );
};
export default EngagementsList;
