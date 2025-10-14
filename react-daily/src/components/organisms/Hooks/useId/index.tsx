import React from 'react'

const UseId = () => {
    const uniqueId = React.useId();
    const uniqueId2 = React.useId(); // This will generate a different ID from uniqueId
      // Generates a unique ID for the component instance
    // This ID will be stable across server and client renders, making it suitable for accessibility attributes like `htmlFor` in labels.
  return (
    <div>
        <h1>useId Hook Example</h1>
        <p>Unique ID: {uniqueId}</p>
        <p>Another Unique ID: {uniqueId2}</p>
      
        {/* Example usage of useId for accessibility */}
        <label htmlFor={uniqueId}>Label for input with unique ID</label>
        <input id={uniqueId} type="text" placeholder="Type something..." />
      
    </div>
  )
}

export default UseId
