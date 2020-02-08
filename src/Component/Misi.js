import React from 'react';
import './Misi.css';

class Misi extends React.Component {
    render () {
        return (
            <div className='mision'>
                <div className='mis-text'>
                    <h4><span>
                    Our Mission</span>
                    </h4>
                </div>
                <div className='card-d'>
                    <div className='m-card'>
                        <h4>Business<br/>Performance</h4>
                        <p>
                        Commitment for excellence is the 
                        foundation that strives our business 
                        performance to go above and beyond, 
                        in order to meet our vision as a strong 
                        catalyst for technology advancement in Indonesia
                        </p>
                    </div>
                    <div className='m-card'>
                        <h4>Nation<br/>Contribution</h4>
                        <p>
                        Nation Independency, as clearly stated 
                        in The 1945 Constitution’s Preamble, has 
                        been an ultimate purpose and a joint 
                        responsibility that our nation endeavoured to achieve
                        </p>
                    </div>
                    <div className='m-card'>
                        <h4>Technology<br/>Mastery</h4>
                        <p>
                        Our passion in technology is boundless. 
                        We want to always be the first in technology 
                        acceleration. Exploration through research and 
                        development approach is how we speed our ambition into creation
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Misi;