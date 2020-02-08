import React from 'react';
import {FaRegCopyright} from 'react-icons/fa';
import './Footer.css';

function Footer () {
    return (
        <div className='footer' id='contact'>
            <div className='fo-top'>
            <h2>no<span>[o]</span>ne</h2>
            <p>
                <span>Find Us at:</span><br/>
                Mediterania Resident<br/>
                Blok F3 / No.24<br/>
                Sukamulya, Cikupa, Kab.Tangerang<br/>
                Banten, 15710
            </p>
            <div className='contact'>
                <a href='tel:02159645635'>
                <span>(021) 59645635</span>
                </a>
                <a href='mailto:hi@noone.my.id'>
                <span>hi@noone.my.id</span>
                </a>
                <a href='https://wa.me/6281219013721'>
                <span>Whatsapp</span>
                </a>
            </div>
            </div>
            <div className='fo-bot'>
            <p>
                <FaRegCopyright/> 2020 no<span>[o]</span>ne.All rights reserved
            </p>
            </div>
        </div>
    )
}
export default Footer;