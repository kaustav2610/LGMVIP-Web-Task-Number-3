import React from "react";
const LeftInput = ({ label, id, value, onChange }) => {
    return (
      <div className='left-desc-inline'>
        <label htmlFor={id}>{label}:</label>
        <input type="text" id={id} value={value} onChange={onChange} />
      </div>
    );
  };

  export default LeftInput;