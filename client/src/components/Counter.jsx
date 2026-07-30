import {usestate} from "react";
function Cpunter (){
    const [count,setcount] = usestate(0);
    return(
        <>
        <h2>Cart items : {count}</h2>
        <button onclick {() => setcount(count+1)}>
            Add to Cart
        </button> 
        </>
    );
} 
export default Counter;