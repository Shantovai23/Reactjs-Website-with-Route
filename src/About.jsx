import React from 'react'
import Common from './Common'
import img from './img/sitting-desktop.svg'

const About=()=>{
    return(<>
         <Common name='We Are Fantastic Talented Developers'
          imgsrc={img} 
          visit='/contact'
          btnname='Contact Now'/>
    </>)
}

export default About