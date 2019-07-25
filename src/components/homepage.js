import React, { Component } from 'react'
import jane from '../components/asset/jane.JPG'



export default class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-sm-4 profile">
                        
                            <span><img src={jane} alt='jane'></img></span>
                            <div className='name'><h3>Mekarosi</h3></div>
                            <h5>upcoming meeting</h5>
                            <div className='comment1'></div>
                            <div className='comment2'></div>
                      
                    </div>
                
                <div class="col-sm-8 sidebar">
                    <h4>Set up a meeting</h4><br/>
                    <h6>We'll email your colleagues and remind</h6>
                        <h6>them close to the time</h6>
                        <br/>
                        <h6>To:</h6>
                        
                </div>
            </div>
        </div>
        )
    }
}
