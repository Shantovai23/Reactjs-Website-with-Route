import React from 'react'
import img from './img/young-people-service-discuss-problem-with-site-break_301430-84.jpg'

import Common from './Common'

const Home=()=>{
    return(<>
         <Common name='Grow Your Business With'
          imgsrc={img} 
          visit='/service'
          btnname='Get Started'/>
    </>)
}

export default Home