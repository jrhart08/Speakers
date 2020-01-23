import React from 'react';
import { getSpeakingEngagements } from '../../api/speakingEngagements';

const SpeakingEngagements = () => {
  const speakingEngagements = getSpeakingEngagements();
  const engagements = Object.values(speakingEngagements);
  return (
    <div>SpeakingEngagements: {engagements}</div>
  );
};


export default SpeakingEngagements;
