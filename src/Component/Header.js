import React from 'react';
import './Header.css';
import {FaSortDown} from 'react-icons/fa';
import Headmob from './Headmob';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='judul'>
                   <a href='#home'><h2>no<span>[o]</span>ne</h2></a>
                </div>
                <div className='item'>
                    <div className='drop'>
                    <h4>Visi<span>[o]</span>n <FaSortDown className='ico'/></h4>
                    <div className='down'>
                        <p><a href='#solution'>Solut<span>[ion]</span>s</a></p>
                        <p><a href='#analytic'>Ana<span>[lyt]</span>ics</a></p>
                        <p><a href='#architecture'><span>[Arc]</span>hitecture</a></p>
                    </div>
                    </div>
                    <div className='drop'>
                    <h4>About<span>[us]</span> <FaSortDown className='ico'/></h4>
                    <div className='down'>
                        <p><a href='#overview'>Over<span>[view]</span></a></p>
                        <p><a href='#visimisi'>Vision<span>[&]</span>Mision</a></p>
                    </div>
                    </div>
                    <div className='drop'>
                    <h4>Res<span>[our]</span>ces <FaSortDown className='ico'/></h4>
                    <div className='down'>
                        <p><a href='#contact'>Doc<span>[u]</span>mentation</a></p>
                    </div>
                    </div>
                    <div className='drop'>
                    <h4><a href='#contact'>Cont<span>[act]</span></a></h4>
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