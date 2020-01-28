import axios from './_axios';

export default (id) => axios
  .get(`api/speaking-engagements/getEngagementById/${{ id }}`)
  .then((response) => response.data);
