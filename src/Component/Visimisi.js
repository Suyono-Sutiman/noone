import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import './Visimisi.css';

class Visimisi extends React.Component {
    render () {
        return (
            <div className='visimisi'>
                <div className='v-card'>
                    <span><FaQuoteLeft/></span>
                    <p>
                    no<span>[o]</span>ne was established out of a sense of 
                    responsibility by the youth of the nation, 
                    as a participative effort to contribute in 
                    developing Indonesia through skills, opportunities, 
                    and good will that we have to do so. We are urged to 
                    take our role as a strong catalyst of nation’s 
                    revolution in technological advancement. We want 
                    to be a big player in the industry that inspires 
                    the next big things that this country will bring to the world.
                    </p>
                    <span><FaQuoteRight className='quo'/></span>
                </div>
                <div className='misi'>
                <div className='m-text'>
                    <h4><span>
                    We strive to become the key mover of every 
                    stakeholder this ecosystem of the future, 
                    and we assuredly will give back to the society 
                    in a form of collective impact towards sustainable living.</span>
                    </h4>
                </div>
            </div>
            </div>
        )
    }
}
export default Visimisi;