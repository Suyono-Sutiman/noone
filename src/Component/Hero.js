import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import {IoIosArrowDown} from 'react-icons/io';
import fd from '../Image/code_review.svg';
import ui from '../Image/work_in_progress.svg';
import './Hero.css';

class Hero extends React.Component {
    render () {
        return (
            <div className='container hero' id='home'>
                <div className='fd'>
                    <div className='ani5'>
                        <h3 className='ani1'>Front End Development</h3>
                        <p className='ani4'><span>[</span>Clean<span>]</span></p>
                        <p className='ani3'><span>[</span>Readable<span>]</span></p>
                        <p className='ani2'><span>[</span>Maintainable<span>]</span></p>
                        <img src={fd} alt='front-end' className='fd-img ani1'/>
                    </div>
                    <div className='ani10'>
                        <h3 className='ani6'>UI & UX Designer</h3>
                        <p className='ani9'><span>[</span>Responsive<span>]</span></p>
                        <p className='ani8'><span>[</span>Fast<span>]</span></p>
                        <p className='ani7'><span>[</span>Intuitive<span>]</span></p>
                        <img src={ui} alt='front-end' className='ani6 fd-img'/>
                    </div>
                </div>
                <IoIosArrowDown className='arrow-down'/>
            </div>
        )
    }
}
export default Hero;