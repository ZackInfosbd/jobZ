import React from 'react';

const FormRow = ({ name, type, value, labelText, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
