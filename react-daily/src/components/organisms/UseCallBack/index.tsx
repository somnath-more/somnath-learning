import React from 'react'

const UseCallback = () => {
    const [num, setNum] = useState(1);

const expensiveResult = UseMemo(() => {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += i;
  }
  return total * num;
}, [num]);

  return (
    <div>

      
    </div>
  )
}

export default UseCallback
