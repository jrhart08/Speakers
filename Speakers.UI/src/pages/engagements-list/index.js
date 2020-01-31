import React from 'react';
import { get } from 'lodash/fp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styled from 'styled-components';
import Album from '../../components/Album';
import useEngagements from '../../hooks/useEngagements';
import EngagementCard from './EngagementCard';

const FixedFab = styled(Fab)`
  position: fixed;
  right: ${({ theme }) => theme.spacing(8)};
  bottom: ${({ theme }) => theme.spacing(8)};
`;

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
      <FixedFab>
        <AddIcon />
      </FixedFab>
    </>
  );
};
export default EngagementsList;
