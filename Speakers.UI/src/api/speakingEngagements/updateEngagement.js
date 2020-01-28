import axios from './_axios';

export default (newEngagement) => axios
  .patch('api/speaking-engagements/editEngagement', newEngagement)
  .then((response) => response.data);
