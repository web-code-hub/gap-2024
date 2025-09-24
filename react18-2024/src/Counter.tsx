import { useState } from "react";

const Counter= () => { 
    const [count, setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1)
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>2024-{count}</h1>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}
export default Counter;