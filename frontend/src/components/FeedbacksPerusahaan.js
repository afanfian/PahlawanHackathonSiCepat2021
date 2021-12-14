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
                    </div>
                    <div className='star'>
                        <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FeedbacksPerusahaan