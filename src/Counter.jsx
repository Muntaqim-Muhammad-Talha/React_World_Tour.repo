import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const plus = () =>{
        setCount(count + 1);
    }
    const minus = () =>{
        setCount(count - 1);
    }
    return(
        <>
        <p>your_react_counter -:- {count}</p>
        <button onClick={plus}><a href="#">+</a></button>
        <span>-_-_-_-_-</span>
        <button onClick={minus}><a href="#">-</a></button>
        </>
    )
}