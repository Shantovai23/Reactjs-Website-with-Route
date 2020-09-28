import React from 'react'
import Button from '@material-ui/core/Button';
import img from './img/user.svg'
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
    return(<>
        <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid">
     <div className="row">
     <div className='col-10 mx-auto'>
     <div className='row'>
     <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
     <h1 className='home-h1'>{props.name}<br/><strong className='brand-name'>ShantoPro</strong></h1>
     <h6 className='my-3'>We Are The Team of Talented Developer Making Websites</h6>
     <div className='mt-3'>
      <NavLink className='deco' to={props.visit}><Button variant="contained" color="primary">
       {props.btnname}
      </Button></NavLink>
     </div>
     </div>
      <div className='col-lg-6 oreder-1 order-lg-2 header-img'>
      <img src={props.imgsrc} className='img-fluid custom'/>
      </div>
      </div>
     </div>
     </div>
     </div>
        </section>
    </>)
}

export default Common