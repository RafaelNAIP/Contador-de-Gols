import React, { ChangeEvent, useState } from 'react';

const Dropdown = ({ options, label }: { options: string[], label: string}) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    setSelected(e.target.value as string);
  };

  return (
    <div>
      <label>
        {label}
        <select value={selected} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;