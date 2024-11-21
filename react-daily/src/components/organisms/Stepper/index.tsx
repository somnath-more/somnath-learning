import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState } from 'react'

const stepData = [
  { label: 'Step 1', value: 0, isActive: true, isLineActive: true },
  { label: 'Step 2', value: 1, isActive: false, isLineActive: true },
  { label: 'Step 3', value: 2, isActive: false, isLineActive: true },
]

const OuterContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '100px',
  width: '100%',
  backgroundColor: '#f5f5f5',
  // placeItems
})
const StepContainer = styled.div<{ isActive: boolean }>((props) => ({
  background: props.isActive ? 'violet' : 'black',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
const Line = styled.div<{ isLineActive: boolean }>((props) => ({
  height: '3px',
  width: '100%',
  background: props.isLineActive ? 'aqua' : 'black',
  margin: '0 20px',
}));

const StepperComp = () => {
  const [stepperData, setStepperData] = useState(stepData);


  const handleStepperClick = (item: number) => {
    const updatedData = stepperData.map((step) => ({
      ...step,
      isActive: step.value <= item,
      isLineActive: step.value < item,
    }));
    setStepperData(updatedData);
  };

  return (
    <OuterContainer>
      {
        stepperData.map((data, index) => (
          <>
            <StepContainer
              isActive={data.isActive}
              onClick={() => handleStepperClick(data.value)}
            >
              {data.label}
            </StepContainer>
            {index < stepperData.length - 1 && (
              <Line isLineActive={data.isLineActive} />
            )}
          </>

        ))
      }

    </OuterContainer>
  )
}

export default StepperComp