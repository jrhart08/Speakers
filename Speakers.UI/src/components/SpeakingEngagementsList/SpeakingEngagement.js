import React from 'react';
import PropTypes from 'prop-types';


const SpeakingEngagement = ({
  // eslint-disable-next-line no-unused-vars
  speakerName, talkName, hostGroupName, startDate, endDate, city, state, attendance,
}) => (
    <li>{startDate}. {speakerName} | {talkName} | {hostGroupName}
      | {endDate} | {city} | {state} | {attendance}</li>);

SpeakingEngagement.propTypes = {
  speakerName: PropTypes.string.isRequired,
  attendance: PropTypes.number,
  talkName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  hostGroupName: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
};

export default SpeakingEngagement;
