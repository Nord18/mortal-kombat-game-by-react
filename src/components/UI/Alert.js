import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  return (
    <div className={`alert alert-${props.bgColor}`} role="alert">
      {props.text}
    </div>
  )
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Alert