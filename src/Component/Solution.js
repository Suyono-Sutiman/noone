import React from 'react';
import personal1 from '../Image/online_resume.svg';
import personal2 from '../Image/personal_site.svg';
import personal3 from "../Image/online_art.svg";
import business1 from '../Image/personal_goals.svg';
import business2 from '../Image/data_trends.svg';
import business3 from '../Image/business_shop.svg';
import './Solution.css'

class Solution extends React.Component {
    render () {
        return (
            <div className='container solution' id='solution'>
                <h3>We provide Integrated Solutions
                <br/>through Visi<span>[o]</span>n</h3>
                <div className='holder'>
                    <div className='card'>
                        <div className='card-text'>
                        <h4>Visi<span>[o]</span>n</h4>
                        <h3>Personal</h3>
                        </div>
                        <p>Solutions tailored to the specific needs of 
                            personal, designed to bring security, 
                            infrastructure management, and other improvements 
                            for Smart People.
                        </p>
                        <div className='card-img-div'>
                            <img src={personal1} alt='personal' className='card-img'/>
                            <img src={personal2} alt='personal' className='card-img'/>
                            <img src={personal3} alt='personal' className='card-img'/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-text'>
                        <h4>Visi<span>[o]</span>n</h4>
                        <h3>Business</h3>
                        </div>
                        <p>Solutions designed to elevate business processes, 
                            enable advanced analytics, introduce workflow 
                            optimizations, and make sustainable business growth viable.
                        </p>
                        <div className='card-img-div'>
                            <img src={business1} alt='personal' className='card-img'/>
                            <img src={business2} alt='personal' className='card-img'/>
                            <img src={business3} alt='personal' className='card-img'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Solution;