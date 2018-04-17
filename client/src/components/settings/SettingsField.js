import React from 'react';

export default ({ input, label, err, meta: { error, touched } }) => {
  return (
    <div className="col-md-6">
      <p className="text-danger">{err}</p>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="text-danger" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};