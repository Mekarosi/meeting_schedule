import React from 'react'
import { useDispatch } from 'react-redux'

export default function Customform() {
    const dispatch = useDispatch()
    ////REDUCER
const increment = () => {
    return {
      type: "INCREMENT"
    }
   }

   const decrement = () => {
    return {
      type: "DECREMENT"
    }
}

const onChange = (value) => {

}

const destinyClicked = () =>{
    dispatch(increment())
}

    return (
        <div>
             {/* <button onClick={destinyClicked}>Click my destiny</button> */}
                      
            <form>
                <h6>To:</h6>

                <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="joanne jane bob"></input>
                <hr></hr>


                <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Subject"></input>
                <hr></hr>

                <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Location"></input>
                <hr></hr>

            </form>
        </div>
    )
}
