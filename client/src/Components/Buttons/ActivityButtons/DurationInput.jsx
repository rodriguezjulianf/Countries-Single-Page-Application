import React from 'react';

function DurationInput({ handleInputChange }) {
  return (
    <div>
      <label for="duration">Duration in hours: </label>
      <input
        required
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

export default DurationInput;
