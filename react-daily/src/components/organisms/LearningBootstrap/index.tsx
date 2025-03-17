import React from 'react'

const LearningBootstrap = () => {
  return (
    <>
    <div 
      className="progress" 
      role="progressbar" 
      aria-label="Success example" 
      aria-valuenow={25} // Corrected to a number 
      aria-valuemin={0} 
      aria-valuemax={100}
    >
      <div 
        className="progress-bar bg-success" 
        style={{ width: '25%' }} 
      ></div>


    </div>
          <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
          Popover on top
        </button>
        <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
          Popover on right
        </button>
        <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
          Popover on bottom
        </button>
        <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
          Popover on left
        </button>
        </>
  )
}

export default LearningBootstrap
