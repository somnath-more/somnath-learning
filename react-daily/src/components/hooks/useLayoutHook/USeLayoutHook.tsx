import React, { useLayoutEffect } from 'react'

const USeLayoutHook = () => {
    const divRef = React.useRef<HTMLInputElement>(null)
    const [width, setWidth] = React.useState(0)
  
    useLayoutEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth)
        }
    }, [])
    return (
<div>
      <div
        ref={divRef}
        style={{ width: '50%', backgroundColor: 'lightblue', padding: '10px' }}
      >
        Resize the window to see the width change.
      </div>
      <p>The width of the above div is: {width}px</p>
    </div>
  )
}

export default USeLayoutHook
