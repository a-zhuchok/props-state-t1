import {useState} from 'react';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent';
import './App.css';
const ParentComponent =()=>{
    const [counter, setCounter] = useState(0);
    const increment =()=>{
        setCounter(counter+1)
    }
    const decrement =()=>{
        if(counter>0){
        setCounter(counter-1)}
    }
    const nul =()=>{
        setCounter(0)
    }
    const random =()=>{
        setCounter(Math.floor(Math.random() * (11 - 0) + 0))
    }
    
    return (
        <div>
        <p>Счетчик: {counter}</p>
        <button onClick={increment}>Увеличить</button>
        <p></p>
        <button onClick={nul}>Сбросить</button>
        <p></p>
        <button onClick={random}>Случайное значение</button>
        <p></p>
        <button onClick={decrement}>Уменьшить</button>
        <p></p>
        <ChildComponent name={'Anna'} count={counter}></ChildComponent>
        <SiblingComponent></SiblingComponent>

      </div>
    )
}
export default ParentComponent