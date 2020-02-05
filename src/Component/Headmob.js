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
                        <p>Ana<span>[lyt]</span>ics</p>
                        <p>System <span>[Arc]</span>hitecture</p>
                    </div>
                    <div className='down-m'>
                        <p>Over<span>[view]</span></p>
                        <p>Vision<span>[&]</span>Mision</p>
                        <p>Milest<span>[one]</span></p>
                    </div>
                    <div className='down-m'>
                        <p>Doc<span>[u]</span>mentation</p>
                        <p>F<span>[A]</span>Q</p>
                    </div>
                    <h4>Cont<span>[act]</span></h4>
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