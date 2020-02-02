import React from 'react';
import './Header.css';
import {FaSortDown} from 'react-icons/fa';
import Headmob from './Headmob';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='judul'>
                    <h2>no<span>[o]</span>ne</h2>
                </div>
                <div className='item'>
                    <div className='drop'>
                    <h4>Visi<span>[o]</span>n <FaSortDown className='ico'/></h4>
                    <div className='down'>
                        <p>Solut<span>[ion]</span>s</p>
                        <p>Ana<span>[lyt]</span>ics</p>
                        <p>System <span>[Arc]</span>hitecture</p>
                    </div>
                    </div>
                    <div className='drop'>
                    <h4>About<span>[us]</span> <FaSortDown className='ico'/></h4>
                    <div className='down'>
                        <p>Over<span>[view]</span></p>
                        <p>Vision<span>[&]</span>Mision</p>
                        <p>Milest<span>[one]</span></p>
                    </div>
                    </div>
                    <div className='drop'>
                    <h4>Res<span>[our]</span>ces <FaSortDown className='ico'/></h4>
                    <div className='down'>
                        <p>Doc<span>[u]</span>mentation</p>
                        <p>F<span>[A]</span>Q</p>
                    </div>
                    </div>
                    <div className='drop'>
                    <h4>Cont<span>[act]</span></h4>
                    </div>
                </div>
                <div className='mobile'>
                    <Headmob/>
                </div>
            </div>
        )
    }
}

export default Header;