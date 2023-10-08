import React from 'react';
const ChildComponent = ({name, count})=>{
    return (
        <div>
        <h1>Привет, {name}. Текущий счётчик:{count}</h1>
        </div>
    )
}
export default ChildComponent