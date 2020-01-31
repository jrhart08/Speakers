import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import styled from 'styled-components';
import Album from '../../components/album';

const FixedFab = styled(Fab)`
  position: fixed;
  right: ${({ theme }) => theme.spacing(8)};
  bottom: ${({ theme }) => theme.spacing(8)};
`;

const EngagementsList = () => (
  <>
    <Grid container spacing={3} justify="center" style={{ height: '200vh' }}>
      <Grid item xs={12}>
        <Typography align="center">
        Speaking Engagements
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Album />
      </Grid>
    </Grid>
    <FixedFab>
      <AddIcon />
    </FixedFab>
  </>
);
export default EngagementsList;
