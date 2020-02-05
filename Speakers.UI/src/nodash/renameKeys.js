import { mapKeys, defaultTo } from 'lodash/fp';

export default (keyMap) => mapKeys((key) => defaultTo(key)(keyMap[key]));
