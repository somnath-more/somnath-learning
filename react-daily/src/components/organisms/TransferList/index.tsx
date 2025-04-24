import React, { useState } from "react";

const LEFTSIDEDATA = [
  {
    id: 1,
    name: "HTML",
    isChecked:false
  },
  {
    id: 3,
    name: "CSS",
    isChecked:false
  },
  {
    id: 2,
    name: "PHP",
    isChecked:false
  },
  {
    id: 4,
    name: "JS",
    isChecked:false
  },
];
const RIGHTSIDEDATA = [
  {
    id: 1,
    name: "REACT",
    isChecked:false
  },
  {
    id: 3,
    name: "TAILWIND",
    isChecked:false
  },
  {
    id: 2,
    name: "BOOTSTRAP",
    isChecked:false
  },
  {
    id: 4,
    name: "VUEJS",
    isChecked:false
  },
];
const TranferList = () => {
  const [leftData, setLeftData] = useState(LEFTSIDEDATA);
  const [rightData, setRightData] = useState(RIGHTSIDEDATA);
  const [filteredLeftSideData,setFilteredLeftSideData]=useState([]);
  const [filteredRightSideData,setFilteredRightSideData]=useState([]);
  const transferSingleToRightSide = () => {
    setRightData([...filteredLeftSideData,...rightData ] )
    setLeftData([filteredLeftSideData-leftData] )
  };
  const transferSingleToLeftSide = () => {
    setLeftData([...filteredRightSideData,...leftData ] )
    setRightData([filteredRightSideData-leftData] 
  };
  const transferAllToRightSide = () => {
    setRightData([...rightData,...leftData ] )
    setLeftData([] )
  };
  const transferAllToLeftSide = () => {
    setLeftData([...leftData,...rightData ] )
    setRightData([] )
  };
  const handleRightChecked = (id) =>{
    const filteredRightSideData = leftData.map((data)=> data.id== id ? !data.isChecked)
  }
  const handleLeftChecked = (id) =>{

    const filteredLeftSideData = leftData.map((data)=> data.isChecked : !data.isChecked)
     
    
  }
  return (
    <div  className="flex flex-row gap-20" >
      <div className="flex flex-col gap-4">
     
          {leftData.map((data, index) => (
            <div  className="flex flex-row gap-4"  key={index}>
              <input type="checkbox" onClick={(e)=>handleLeftChecked(data.id)} value={data.isChecked} />
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300" key={index}>{data.name}</span>
            </div>
          ))}
      
      </div>
      <div  className="flex flex-col gap-10 px-10"  style={{borderLeft: "1px solid grey", borderRight: "1px solid grey"}}>
        <button onClick={transferSingleToRightSide}>{">"}</button>
        <button onClick={transferAllToRightSide}>{">>"}</button>
        <button onAbort={transferSingleToLeftSide}>{"<"}</button>
        <button onClick={transferAllToLeftSide}>{"<<"}</button>
      </div>
      <div className="flex flex-col gap-10" >
      
          {rightData.map((data, index) => (
             <div  className="flex flex-row gap-4"  key={index}   >
              <input type="checkbox" onClick={(e)=>handleRightChecked(e)} value={data.isChecked} />
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">{data.name}</span>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default TranferList;
