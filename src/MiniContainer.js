import React from 'react';
import './MiniContainer.css';

const MiniContainer = (props) => {
  const { eachList, colorClicked } = props;
  const { id, color } = eachList;

  const contClick = () => {
    colorClicked(id);
  }

  return (
    <button
      className="mini-cont"
      style={{
        backgroundColor: `${color}`, // Fix template literals
        boxShadow: '2px 1px 2px 1px black', // Add quotes around boxShadow value
        color: `${color}`, // Fix template literals
      }}
      onClick={contClick}
    >
      hi
    </button>
  );
}

export default MiniContainer;
