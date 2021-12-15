import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './Style.css';
import "./components-css/FeedbacksPerusahaan.css"

const FeedbacksPerusahaan = () => {
    return (
        <div id='feedbacksperusahaan'>
            <div className='feedbacksperusahaan'>
                <div className='btn'>
                    <div>
                        <p className='totalrating'>2,7</p>
                        <p className='star'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                    </div>
                    <div class="slidecontainer">
                        <div>
                            <span class="range-left">5 <AiFillStar/></span>
                            <input type="range" min="1" max="100" value="55" color="red"/>
                            <span class="range-right">250</span>
                        </div>
                        <div>
                            <span class="range-left">4 <AiFillStar/></span>
                            <input type="range" min="1" max="100" value="35"/>
                            <span class="range-right">100</span>
                        </div>
                        <div>
                            <span class="range-left">3 <AiFillStar/></span>
                            <input type="range" min="1" max="100" value="45"/> 
                            <span class="range-right">200</span>
                        </div> 
                        <div>
                            <span class="range-left">2 <AiFillStar/></span>
                            <input type="range" min="1" max="100" value="65"/>
                            <span class="range-right">500</span>
                        </div> 
                        <div>
                            <span class="range-left">1 <AiFillStar/></span>
                            <input type="range" min="1" max="100" value="25"/>
                            <span class="range-right">150</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
export default FeedbacksPerusahaan