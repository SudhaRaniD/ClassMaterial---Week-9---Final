import React,{useEffect, useStae} from 'react'
import CPNavBar from './_CPNavBar'

function Project34() {

  useEffect(() => {
    fetch ('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => SVGMetadataElement(data))
    .then(()=> console.log(data));
  }, []);
  return (
    <div>
      <div className='app-container'>
        <CPNavBar/>
        <div className='content'>
          <h3>{data[dataId].title}</h3>
          <button onClick={changeId}>

          (dateId === 1 ?'Change the title of Id to 2')
          </button>
          </div>
          </div>
      </div>
  )
}

export default 34
