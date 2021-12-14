import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
// import './Style.css';
import "./components-css/IsiFeedbacks.css"

const IsiFeedback = () => {
    return(
        <div id='isifeedbacks' >
            <div className='isifeedbacks'>
                <p>Beri Feedback</p>
                <p><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>
            </div>
           <div>
                <p className='nama'>Nama (anonim)</p>
                <textarea className='isinama'></textarea>
           </div>
           <div >
           <textarea  className='isipesan'></textarea>
           </div>
           <div>
                <button className='btn'>
                    <p>Kirim</p>
                </button>
           </div>
        </div>
    );
};

export default IsiFeedback