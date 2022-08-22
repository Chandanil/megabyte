import "./Newsletter.scss";
import React from 'react'; 
export const Newsletter = () =>{
    return (
        <div className="newsletter-form">
            <div className="container">
                <div className="newsl-form">
                <div className="cl-header">
                            <h5 className="title">Subscribe to <span>Newsletter</span></h5>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget justo.</p>
                        </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your email"/>
                            <button className="cl-btn">Subscribe<i className="fa fa-bell"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}