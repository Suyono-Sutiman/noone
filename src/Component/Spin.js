import React from 'react';
import './Spin.css'

class Spin extends React.Component {
    render () {
        return (
            <div className='spin'>
            <div className="orbit-spinner">
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
            </div>
            </div>
        )
    }
}

export default Spin;