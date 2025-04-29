import React from 'react';
import './index.css'

const HeightLearning = () => {
    
  return (
    <div>
      <h1>Height Learning</h1>
      <div style={{height:'200px'}}>
        <p>This component is used to display a height learning chart.</p>
        <p>In this example, a simple div is created with a height of 1000 pixels. As you can see, the div grows linearly as the index increases.</p>
      </div>
      <div style={{backgroundColor:'pink',overflowY:'auto',maxHeight:'250px'}}>
      {
        Array.from({length: 100000}, (_, i) => i + 1).map(i => <div key={i} style={{height: `${i}px`}}>
          hello
        </div>)
      }
      </div>
      
    </div>
  )
}

export default HeightLearning
