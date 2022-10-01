import React from 'react'
import './proj.css';
import one from './one.png';

import two from './two.png'
import three from './three.png'
import four from './four.png'
import five from './five.png'
import six from './six.png'
import seven from './seven.png'
import eigth from './eigth.png'
import nine from './nine.png'

const Projects = () => {
  return (
    <div className='body'>
        <div className='mask'>
            <image  src={one.png}  alt="" />
            <image  src={two.png}  alt='' />
            <image  src={three.png}  alt='' />
            <image  src={four.png}  alt='' />
            <imag  src={five.png}  alt='' />
            <img  src={six.png}  alt='' />
            <img  src={seven.png}  alt='' />
            <img  src={eigth.png}  alt='' />
            <img src={nine.png} alt=''/>
            <image></image>
        </div>
    </div>
  )
}

export default Projects