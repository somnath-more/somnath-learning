import React, { useState } from 'react'
import './index.css';
import unFilledStar from './filledStar.svg';
import  filledStar from './unFilledStar.svg';

const TOTAL_STARS = 5;
const StarRating = () => {
    const [selectedStar, setSelectedStar] = useState(0); // Selected (rated) star count
  const [hoveredStar, setHoveredStar] = useState(0);   // Hovered star count

  const handleClick = (index: number) => {
    setSelectedStar(index);
  };

  const handleMounseEnter=(index:number)=>{
        setHoveredStar(index)
  }

  const handleMounseLeave=()=>{
    setHoveredStar(0);
        
  }
  return (
    <div>
    <p>Star Rating</p>
    <div className="star-container" style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
    {
        Array.from({length: TOTAL_STARS},(_,i)=>{
            const starIndex = i+1;
            const isFilled=hoveredStar >= starIndex || (!hoveredStar && selectedStar >= starIndex);
            const starImage = isFilled ? filledStar : unFilledStar;
            console.log(starImage,isFilled);
            
            return(
                <>
                  <img
              key={starIndex}
              src={starImage}
              alt={`star-${starIndex}`}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleMounseEnter(starIndex)}
              onMouseLeave={handleMounseLeave}
              style={{ width: '32px', height: '32px' }}
            />
           
                   
                </>
            )
        })
    }
    </div>
      
      
    </div>
  )
}

export default StarRating
