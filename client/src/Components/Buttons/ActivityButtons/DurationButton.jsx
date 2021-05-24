import React from 'react';

function DurationButton({ handleInputChange }) {
  return (
    <div>
      <label for="duration">Duration in hours: </label>
      <input
        type="number"
        id="duration"
        name="duration"
        min="1"
        max="1000"
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

export default DurationButton;
