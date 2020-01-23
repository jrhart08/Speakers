import React from 'react';
import ReactDOM from 'react-dom';
import SpeakingEngagements from './components/SpeakingEngagementsList';

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('mount-point');

  if (!mount) {
    throw new Error('Mount point not found.');
  }

  ReactDOM.render(<SpeakingEngagements />,
    mount);
});
