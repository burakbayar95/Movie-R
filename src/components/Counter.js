import { React, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const arttir = () => {
    if(count!==5)
    {
      setCount(count+1)
    }
    else{
        setCount(count)
    }
  };
  const azalt=()=>{
      if(count!==0)
      {
        setCount(count-1)
      }
      else{
          setCount(count)
      }
      
  }

  return (
    <>
      <h1>Counter: {count}</h1>
<button onClick={azalt}> Azalt </button>
      <button onClick={arttir}> Arttır </button>
      
    </>
  );
};

export default Counter;
