import React, { useState } from 'react';
import axios from "axios";
import './Style.css';
import "./components-css/IsiFeedbacks.css"
import { FaStar } from "react-icons/fa";

const IsiFeedback = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState('');
    const stars = Array(5).fill(0);

    const IsiFeedback = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/feedbacks', {
                star: currentValue,
                name: name,
                message: message
                }
            )
        } catch (error) {
        }
    }

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

    return(
        <div className='isiFeedbacks-container' id='isifeedbacks'>
            <div className='isiFeedbacks-header'>
                <h2>Isi Feedback</h2>
            </div>
            <div>
                <div className='isiFeedbacks-form'>
                    <form onSubmit={ IsiFeedback }>
                        <div className='isiFeedbacks-rating-container'>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? "#ffc107" : "#a9a9a9"}
                                    className='isiFeedbacks-rating-star'
                                    />
                                )
                            })}
                        </div>
                        <h3 className="isiFeedbacks-form-title">Nama</h3>
                        <input className="isiFeedbacks-form-input" type="username" placeholder="Nama ..." value={name} onChange={(e) => setName(e.target.value)} required/><br></br>
                        <input className="isiFeedbacks-form-radio" type="checkbox" name="nama" value="Anonim" onClick={(e) => setName(e.target.value)} />
                        <label for="isiFeedbacks-form-anonim">Isi sebagai Anonim</label>
                        <h3 className="isiFeedbacks-form-title">Feedback</h3>
                        <textarea className="isiFeedbacks-form-input isiFeedbacks-form-input-textarea" placeholder="Feedback ..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="isiFeedbacks-form-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IsiFeedback;