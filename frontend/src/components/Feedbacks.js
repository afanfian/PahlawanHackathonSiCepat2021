import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillStar } from "react-icons/ai";
import './Style.css';
import "./components-css/Feedbacks.css";

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        getFeedbacks();
    });

    const axiosJWT = axios.create();

    const getFeedbacks = async() => {
        const response = await axiosJWT.get('http://localhost:5000/feedbacks');
        setFeedbacks(response.data);
    }

    return (
        <div className="feedbacks-container">
            <div className="feedbacks-wrapper">
                <h2 class="container-title">Feedbacks</h2>
                <ul className="feedbacks-auto-grid">
                    { feedbacks.map((feedbacks, index) => (
                        <li className="feedbacks-card">
                            <div className="fb-card-content">
                                <div className="fb-card-header">
                                    <h4>{feedbacks.name}</h4>
                                    <h4 className="fb-card-header-star">{feedbacks.star}&#160;<AiFillStar color='#ffc107'/></h4>
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
