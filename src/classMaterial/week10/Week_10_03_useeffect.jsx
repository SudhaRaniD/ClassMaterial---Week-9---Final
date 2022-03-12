import React, {useEffect, useState} from 'react'
import CMNavBar from '../_CMNavBar'

function Week_10_03_useeffect() {
    const [count, setCount] = useState(0);
    const [rawData, setRawData] = useState('HelloWorld')

    useEffect(() => {
        fetch('http://jasonplaceholder.typicode.com/comments/2')
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => updateData(data));
        alert("hello class");
        console.log('useEffect');
    }, []);
 
    const tempFunc = () => {
        setCount(() => c + 1);
    };

    const updateData = () =>{
        setRawData(d.name)
    }

  return (
    <div className=' app-container'>
        <CMNavBar/>
        <div className='content'>
            <p>{count}</p>
            <button onClick={tempFunc}> click me </button>
            </div>
      
    </div>
  )
}

export default Week_10_03_useeffect
