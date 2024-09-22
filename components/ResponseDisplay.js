import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' },
];

function ResponseDisplay({ response }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const renderSelectedData = () => {
    return selectedOptions.map(option => (
      <div key={option.value} className="response-item">
        <h3>{option.label}</h3>
        <p>{JSON.stringify(response[option.value])}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Response</h2>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        value={selectedOptions}
      />
     <div className="response-data">
        {renderSelectedData()}
      </div>
    </div>
  );
}

export default ResponseDisplay;
