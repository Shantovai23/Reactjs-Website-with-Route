import React from 'react'

const Footer=()=>{
    let year=new Date().getFullYear()
    return(<>
       <footer className='text-center  custom-footer'>
       <p >All rights reserved by ShantoPro {year}</p>
       </footer>
    </>)
}

export default Footer