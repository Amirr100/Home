import React from 'react'
import photo from '../../img/avataaars.svg'


export default function home() {

  return <>
 
<div className='home pt-40'>
  <div className='content'>
  <img src={photo} alt="" className='mx-auto w-1/5 '/>
  <h1 className='text-4xl font-bold text-center text-white pt-4 pb-4'>START FRAMEWORK  </h1>

    <div className='flex items-center justify-center'>
      <div className='bg-white mb-5 h-1 w-20'></div>
      <div><i className="fa-solid fa-star"></i></div>
      <div className='bg-white mb-5 h-1 w-20 ms-1'></div>
    </div>

    <div className=' text-white text-sm  text-center '><p>Graphic Artist - Web Designer - Illustrator</p></div>




  </div>
</div>



  </>

}
