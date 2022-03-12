import React from 'react'

function Week10_02_Custom(curState = false) {
    const[state,setState] = useState(curState)
  toggle = () =>{
      setState(!state)
  }
  return[state,toggle]
}

export default Week10_02_Custom
