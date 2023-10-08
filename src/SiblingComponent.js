import {useState} from 'react';
const SiblingComponent = ()=>{
        const [text, setText] = useState('Привет');
        const increment =()=>{
            if (text!=='Redev'){
            setText("Redev")}
            else (setText("Привет"))
        }
        
    return (
        <div>
            <p>Текущий текст: {text}</p>
            <button onClick={increment}>Изменить текст</button>
           
        </div>
    )
    }
export default SiblingComponent