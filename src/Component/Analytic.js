import React from 'react';
import './Analytic.css';
import responsive from '../Image/web_devices.svg';
import fast from '../Image/speed_test.svg';
import dynamic from '../Image/progressive_app.svg';
import intuitive from '../Image/new_ideas.svg';

class Analytic extends React.Component {
    render () {
        return (
            <div className='analytic' id='analytic'>
                <h3>How we are<br/>
                    Extending Visi<span>[o]</span>n<br/>
                    Beyond Imagi<span>[nation]</span>
                </h3>
                <div className='an-d-1'>
                    <div className='an-in-1'>
                        <img src={responsive} alt='responsive' className='an-img'/>
                        <p>
                        <span>[</span>Our layouts will work on any device, big or small<span>]</span>
                        </p>
                    </div>
                    <div className='an-in-1'>
                        <img src={fast} alt='fast' className='an-img'/>
                        <p>
                        <span>[</span>Fast load times and lag free interaction, our highest priority<span>]</span>
                        </p>
                    </div>
                </div>
                <div className='an-d-1'>
                    <div className='an-in-1'>
                        <img src={dynamic} alt='dynamic' className='an-img'/>
                        <p>
                        <span>[</span>Websites don't have to be static, we love making pages come to life<span>]</span>
                        </p>
                    </div>
                    <div className='an-in-1'>
                        <img src={intuitive} alt='intuitive' className='an-img'/>
                        <p>
                        <span>[</span>Strong preference for easy to use, intuitive UX/UI<span>]</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Analytic;