import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {IoIosArrowDown} from 'react-icons/io';
import fd from '../Image/front-end.png';
import ui from '../Image/ui.png';
import './Hero.css';
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

class Hero extends React.Component {
    render () {
        return (
            <div className='container hero' id='home'>
                <div className='palax-div'><div className='palax'></div></div>
                <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                <div className='fd'>
                    <div className='left'>
                        <h3>Front End<br/> Development</h3>
                        <p><span>[</span>Clean<span>]</span></p>
                        <p><span>[</span>Readable<span>]</span></p>
                        <p><span>[</span>Maintainable<span>]</span></p>
                    </div>
                    <div className='right'>
                        <img src={fd} alt='front-end' className='fd-img'/>
                    </div>
                </div>
                <div className='fd'>
                    <div className='left'>
                        <h3>UI UX<br/> Designer</h3>
                        <p><span>[</span>Responsive<span>]</span></p>
                        <p><span>[</span>Fast<span>]</span></p>
                        <p><span>[</span>Intuitive<span>]</span></p>
                    </div>
                    <div className='right'>
                        <img src={ui} alt='front-end' className='fd-img'/>
                    </div>
                </div>
                </Carousel>
                <IoIosArrowDown className='arrow-down'/>
            </div>
        )
    }
}
export default Hero;