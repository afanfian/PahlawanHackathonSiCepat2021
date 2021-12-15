import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import './Style.css';
import "./components-css/Feedbacks.css";

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState('');
    const stars = Array(5).fill(0);

    useEffect(() => {
        getFeedbacks();
    });

    const axiosJWT = axios.create();

    const getFeedbacks = async() => {
        const response = await axiosJWT.get('http://localhost:5000/feedbacks');
        setFeedbacks(response.data);
    }

    const handleClick = value => {
        setCurrentValue(value)
        console.log(value)
    };

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };

    return (
        <div className="feedbacks-container">
            <div className="feedbacks-wrapper">
                <div className="feedbacks-container-header">
                    <h2 className="container-title">Feedbacks</h2>
                    <div className="feedbacks-rating-upper-container">
                        <div className='feedbacks-rating-container'>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                    key={index}
                                    size={20}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? "#ffc107" : "#a9a9a9"}
                                    className='isiFeedbacks-rating-star'
                                    />
                                )
                            })}
                        </div>
                        <button onClick={() => handleClick(0)} onMouseOver={() => handleMouseOver(0)} className="feedbacks-rating-toggle"><h3>Tampilkan Semua</h3></button>
                    </div>
                </div>
                <ul className="feedbacks-auto-grid">
                    { feedbacks.map((feedbacks, index) => (
                        <li key={index} className="feedbacks-card">
                            <div className="fb-card-content">
                                <div className="fb-card-header">
                                    <h4>{feedbacks.name}</h4>
                                    <h4 className="fb-card-header-star">{feedbacks.star}&#160;<FaStar color='#ffc107'/></h4>
                                </div>
                                <p>{feedbacks.message}</p>
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}

export default Feedbacks
