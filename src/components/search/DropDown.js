import React from 'react';

const Dropdown = ({
  val, label, selections, onChange,
}) => {
  const handleChange = (event) => {
    const {
      value,
    } = event.target;
    onChange(label, value);
  };
  return (
    <React.Fragment>
      <select value={val} onChange={handleChange}>
        <option value="">選択</option>
        {selections.map((selection, idx) => (
          <option key={idx} value={selection}>
            {selection}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Dropdown;
