import React from 'react';
import './Overview.css';

class Overview extends React.Component {
    render () {
        return (
            <div className='container overview' id='overview'>
                <div className='o-ti top'>
                    <div className='o-left'>
                        <p>About no<span>[o]</span>ne</p>
                        <h4>
                        We are Front End Development & UI-UX Designer<br/>
                        We have serious passion for UI effects,
                        animations and creating intuitive, dynamic user experiences.<br/>
                        <span>Let's make something special.</span>
                        </h4>
                    </div>
                    <div className='o-right'>
                        <div className='o-logo'>
                        <h2>n</h2>
                        <h2>o</h2>
                        <h2><span>[o]</span></h2>
                        <h2>n</h2>
                        <h2>e</h2>
                        </div>
                    </div>
                </div>
                <div className='o-ti'>
                    <div className='o-right'>
                        <div className='o-logo'>
                        <h2>n</h2>
                        <h2>o</h2>
                        <h2><span>[o]</span></h2>
                        <h2>n</h2>
                        <h2>e</h2>
                        </div>
                    </div>
                    <div className='o-center'>
                        <p>Our core focus is</p>
                        <h4>
                        Developing stunning <span>[interface] </span>
                        attractive <span>[experience] </span>
                        solutions toward complex issues faced by
                        multi-sectoral industries and modern society
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Overview;