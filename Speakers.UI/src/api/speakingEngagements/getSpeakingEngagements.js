import axios from './_axios';

export default () => axios
  .get('api/speaking-engagements')
  .then((response) => response.data);
