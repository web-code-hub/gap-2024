import { useEffect, useState } from "react";

const Counter= () => { 
    const [count, setCount] = useState(0);
    const getData = async ()=>{
        try {
            const data = await fetch('/data',{method:'get'})
            const res = await data.json()
            console.log('API Response:', res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(()=>{ 
        getData()
    },[])
    const handleClick = ()=>{
        setCount(count+1)
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>2024-{count}</h1>
            <p>{count % 2 === 0 ? 'even' : 'odd'}</p>
            <button onClick={handleClick}>+1</button>
            <button onClick={()=>setCount(0)}>reset</button>
        </div>
    )
}
export default Counter;