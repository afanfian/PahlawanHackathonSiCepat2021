import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './Style.css';
import "./components-css/Feedbacks.css"

const Feedbacks = () => {
    return (
        <div id="feedbacks" className="container">
            <div className="container-header">
                <h2 class="container-title">Feedbacks</h2>
                <h2 className="container-star">  2 Star <AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h2>
            </div>
            <section className="upper-sec">
                <section className="lower-sec">
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name1</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name2</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                </section>
                <section className="lower-sec">
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name3</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name4</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="upper-sec">
                <section className="lower-sec">
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name5</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name6</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                </section>
                <section className="lower-sec">
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name7</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                    <div className="fb-card">
                        <div className="fb-card-content">
                            <div className="fb-card-header">
                                <h3>Feedback Name8</h3>
                                <h3><AiFillStar color='gold'/><AiFillStar color='gold'/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
                            </div>
                            <p>Insert Feedback here.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Feedbacks
