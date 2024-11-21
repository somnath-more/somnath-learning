import React from 'react'

const BootstrapComp = () => {
  return (
    <div className="container">
      <h1 className="text-center text-secondary">Welcome to My Bootstrap Page</h1>
      <button className="btn btn-success mt-3">Click Me!</button>
      <div className="card mt-4">
        <div className="card-body">
          This is a card component styled by Bootstrap.
        </div>
      </div>
    </div>
  )
}

export default BootstrapComp