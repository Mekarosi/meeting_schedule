import React from 'react'
import {useDispatch, useSelector} from 'react-redux'



export default function Schedule() {
    
const state = useSelector((state) => {return state})
const dispatch = useDispatch()


  ////REDUCER
  const increment = () => {
    return {
      type: "INCREMENT"
    };
   };

   const decrement = () => {
    return {
      type: "DECREMENT"
    };
};
    const onChange = (value) => {

    }
    const destinyClicked = () => {
        dispatch(increment())
    }

    const destinyupgrade = () => {
        dispatch(decrement())
    }


    return (
        <div>
            <p style={{ 'color': 'blue' }}>upgrade me{state}</p>
            <button onClick={destinyClicked}>Click my button</button> 
            <button onClick={destinyupgrade}>upgrade my destiny</button> 
        </div>
    )
}
