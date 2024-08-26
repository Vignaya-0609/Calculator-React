import React, { useState } from 'react'
import './App.css';
function Calculator() {
    const [total,setTotal]=useState("");

    const handleClick=(e)=>{
        setTotal(total.concat(e));
    }
    const clear=()=>{
        setTotal("");
    }
    const handleDelete=()=>{
        setTotal(total.slice(0,-1))
    }
    const equate = () => {
        try {
          let res = Function('"use strict";return (' + total + ')')();
          setTotal(res.toString());
        } catch {
          setTotal("Error");
        }
      }
  return (
    <div className='container'>
        <form>
            <input type="text" value={total}></input>
        </form>
        <div className='keypad'>
            <button id="clear" className='highlight' onClick={clear}>AC</button>
            <button className='highlight' onClick={handleDelete}>DEL</button>
            <button className='highlight' onClick={()=>handleClick("/")}>&divide;</button>
            <button onClick={()=>handleClick("7")}>7</button>
            <button onClick={()=>handleClick("8")}>8</button>
            <button onClick={()=>handleClick("9")}>9</button>
            <button className='highlight' onClick={()=>handleClick("*")}>&times;</button>
            <button onClick={()=>handleClick("4")}>4</button>
            <button onClick={()=>handleClick("5")}>5</button>
            <button onClick={()=>handleClick("6")}>6</button>
            <button className='highlight' onClick={()=>handleClick("-")}>-</button>
            <button onClick={()=>handleClick("1")}>1</button>
            <button onClick={()=>handleClick("2")}>2</button>
            <button onClick={()=>handleClick("3")}>3</button>
            <button className='highlight' onClick={()=>handleClick("+")}>+</button>
            <button onClick={()=>handleClick("0")}>0</button>
            <button onClick={()=>handleClick(".")}>.</button>
            <button id="equate" className='highlight' onClick={equate}>=</button>
        </div>
    </div>
  )
}

export default Calculator