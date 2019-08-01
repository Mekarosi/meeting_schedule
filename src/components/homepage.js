import React, { Component } from 'react'
import jane from '../components/asset/jane.JPG'
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-solid-svg-icons'
import TimePicker from 'rc-time-picker';
 import Customform from './customform';


const showSecond = true;



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

                    <div className="col-sm-8 sidebar">
                    <img className="clock" src="https://static.thenounproject.com/png/8004-200.png" alt="clock image"/>
                    {/* <i class="far fa-clock"></i> */}
                        <h4 className="set-meeting">Set up a meeting</h4><br />
                        <h6>We'll email your colleagues and remind</h6>
                        <h6>them close to the time</h6>
                        <br />

                            <Customform></Customform>

                        <br />
                        <strong>Duration</strong>

                        <div className="container">
                            <div className="row">
                                <div className="col"><button className="btn btn-primary" type="submit">3 mins</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">4.5 mins</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">1 hour</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">1.5 hours</button></div>
                            </div>


                            <div class="row">
                                <div className="col"><button className="btn btn-primary" type="submit">2 hours</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">2.5 hours</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">3 hours</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">3.5 hours</button></div>
                            </div>

                            <div class="row">
                                <div className="col"><button className="btn btn-primary" type="submit">4 hours</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">4.5 hours</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">5 hours</button></div>
                                <div className="col"><button className="btn btn-primary" type="submit">5.5 hours</button></div>
                            </div>
                        </div>

                        <strong>Time</strong>


                        <div className="container">
                            <div class="row">
                                <div className='col-6'>
                                    <TimePicker
                                        style={{ width: 100 }}
                                        showSecond={showSecond}
                                        defaultValue={moment()}
                                        className="xxx"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='col-6'>
                                    <TimePicker
                                        style={{ width: 100 }}
                                        showSecond={showSecond}
                                        defaultValue={moment()}
                                        className="xxx"
                                        onChange={e=>{
                                            this.onChange(e)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn2 btn-primary">Send</button>
                    </div>
                </div>
            </div>
        )
    }
}
