import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LearningBootstrap = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'pink' }}>
      <h1 className="text-center">Hello Bootstrap Grid</h1>

      <div className="row">
        <div className="col-12 col-md-2" style={{ backgroundColor: '#ffc' }}>
          Column 1 (full on mobile, half on medium+)
        </div>
        <div className="col-12 col-md-10" style={{ backgroundColor: '#cfc' }}>
          Column 2 (full on mobile, half on medium+)
        </div>
      </div>
    </div>
  );
};

export default LearningBootstrap;
