import React from 'react';
import './Headmob.css'

class Headmob extends React.Component {
    render () {
        return (
            <div className='h-mob'>
                <input type="checkbox" id="myInput"/>
                <label htmlFor="myInput">
                <span className="bar top"></span>
                <span className="bar middle"></span>
                <span className="bar bottom"></span>
                </label>
                <aside>
                    <div className="aside-section aside-left">
                    <div className='down-m'>
                        <p><a href='#solution'>Solut<span>[ion]</span>s</a></p>
                        <p><a href='#analytic'>Ana<span>[lyt]</span>ics</a></p>
                        <p><a href='#architecture'><span>[Arc]</span>hitecture</a></p>
                    </div>
                    <div className='down-m'>
                        <p><a href='#overview'>Over<span>[view]</span></a></p>
                        <p><a href='#visimisi'>Vision<span>[&]</span>Mision</a></p>
                    </div>
                    <div className='down-m'>
                        <p><a href='#contact'>Doc<span>[u]</span>mentation</a></p>
                    </div>
                        <h4><a href='#contact'>Cont<span>[act]</span></a></h4>
                    </div>
                    <div className="aside-section aside-right">
                    <a href='#home'>
                    <div className='j-r'>
                    <h2>n</h2>
                    <h2>o</h2>
                    <h2><span>[o]</span></h2>
                    <h2>n</h2>
                    <h2>e</h2>
                    </div>
                    </a>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Headmob;