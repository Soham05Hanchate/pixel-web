import React from 'react';

const SelectField = ({ label, options, value, onChange }) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <select value={value} onChange={onChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text)' }}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default SelectField;