import { useState, useEffect } from 'react';
import { getSpeakingEngagements } from '../api/speakingEngagements';

const useEngagements = () => {
  const [engagements, setEngagements] = useState([]);

  useEffect(() => {
    getSpeakingEngagements().then(setEngagements);
  }, []);

  return engagements;
};
export default useEngagements;
