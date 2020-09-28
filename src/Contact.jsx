import React from 'react'

const Contact=()=>{
    return(<>
         <div className='my-5'>
         <h1 className='text-center'>Contact Us</h1>
         </div>
         <div className='container container_div'>
              <div className='row'>
              <div className='col-md-6 col-10 mx-auto'>
              <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">FullName</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>

        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone"/>

        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
        </div>
         <div class="mb-3">
         <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
           </div>
           <div className='col-12'>
           <button className="btn btn-outline-dark" type='submit'>Submit</button>
           </div>
              </div>
              </div>
         </div>
    </>)
}

export default Contact