import React, { useRef, useEffect } from 'react';

function UseRefHook() {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // if(inputEl.current){
    // inputEl.current.focus();
      
    // }
  }, []);

  return <input ref={inputEl} type="text" />;
}
export default UseRefHook;