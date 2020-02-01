import identity from 'lodash/identity';
import {
  THEME_CHANGED,
} from '../../actions/types';
import onThemeChanged from './onThemeChanged';

const initialState = {
  current: 'dark',
};

const handlers = {
  [THEME_CHANGED]: onThemeChanged,
};

export default (state = initialState, action) => {
  const reduce = handlers[action.type] || identity;

  return reduce(state, action);
};
