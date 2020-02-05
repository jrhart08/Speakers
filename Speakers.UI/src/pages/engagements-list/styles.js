import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';

export const FabX = styled(Fab).attrs({ color: 'primary' })`
  position: fixed;
  right: ${({ theme }) => theme.spacing(8)};
  bottom: ${({ theme }) => theme.spacing(8)};
`;
