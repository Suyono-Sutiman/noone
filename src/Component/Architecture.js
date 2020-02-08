import React from 'react';
import './Architecture.css'
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
        FaAdobe, FaBootstrap} from 'react-icons/fa';
import {AiOutlineAntDesign} from 'react-icons/ai';
import mui from '../Image/material-ui.svg';

class Architecture extends React.Component {
    render () {
        return (
            <div className='container archi' id='architecture'>
                <h3>
                    Tools <span>[</span>we play<span>]</span><br/>
                    Language <span>[</span>we spoke<span>]</span>
                </h3>
                <div className='archi-d'>
                    <div className='archi-in'>
                        <FaHtml5 className='archi-img'/>
                        <h4><span>[</span>HTML<span>]</span></h4>
                    </div>
                    <div className='archi-in'>
                        <FaCss3Alt className='archi-img'/>
                        <h4><span>[</span>CSS<span>]</span></h4>
                    </div>
                    <div className='archi-in'>
                        <FaJsSquare className='archi-img'/>
                        <h4><span>[</span>JavaScript<span>]</span></h4>
                    </div>
                </div>
                <div className='archi-d'>
                    <div className='archi-in'>
                        <FaReact className='archi-img'/>
                        <h4><span>[</span>REACT<span>]</span></h4>
                    </div>
                    <div className='archi-in'>
                        <FaNodeJs className='archi-img'/>
                        <h4><span>[</span>Node JS<span>]</span></h4>
                    </div>
                </div>
                <div className='archi-d'>
                    <div className='archi-in'>
                        <FaAdobe className='archi-img'/>
                        <h4><span>[</span>XD<span>]</span></h4>
                    </div>
                    <div className='archi-in'>
                        <FaBootstrap className='archi-img'/>
                        <h4><span>[</span>Bootstrap<span>]</span></h4>
                    </div>
                    <div className='archi-in'>
                        <img src={mui} alt='mui' className='archi-img'/>
                        <h4><span>[</span>M-UI<span>]</span></h4>
                    </div>
                    <div className='archi-in'>
                        <AiOutlineAntDesign className='archi-img'/>
                        <h4><span>[</span>Ant-D<span>]</span></h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Architecture;