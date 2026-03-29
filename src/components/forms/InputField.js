import React from 'react';

const InputField = ({ label, type = "text", placeholder, value, onChange, required = false }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        required={required}
      />
    </div>
  );
};

export default InputField;