import React from 'react'
import './BikeCardPage.css'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
function BikeCard({img,name,price}) {
 let Navigate = useNavigate()
   let setVal=async()=>{
axios.post(`https://royalbrothers.cyclic.app/Cart`,{

"img":img,
"name":name,
"price":price
}).then((res)=>{console.log(res)})
    Navigate('/cart')
   }





  return (
    <div id="card">
      <span className='zero_dp'></span>
    
    <h3 id="ser_name">{name}</h3>
     
<div  className='product_img'>
<img src={img} alt={name}/>
</div>
   

<p className='avail_at'>Available at</p>

<div className='time_date'>

<div className='pick_date'>
  <span>10:00 am</span>
  <span>
05 Jan 2023</span>
</div>
<div>
  <div className='pick_to'>
    to
  </div>
</div>
<div className='pick_date'>
<span>12:00 pm</span>
  <span>
05 Jan 2023</span>
</div>

</div>

     <div id="pricebox">

<span className='price_include'> 
  
  <span>
₹ {price}
  </span>
  <span>
  (80 km included)
  
  </span>
  
  
   </span>

<button className="button-37" onClick={setVal}>Book</button>


     </div>
    
    </div>
  )
}

export default BikeCard
