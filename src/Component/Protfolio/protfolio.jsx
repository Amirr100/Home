import React from 'react'
import logo1 from '../../img/poert1.png'
import logo2 from '../../img/port2 (1).png'
import logo3 from '../../img/port3 (1).png'
import logo4 from '../../img/poert1 (1).png'
import logo5 from '../../img/port2.png'
import logo6 from '../../img/port3.png'


export default function protofolio() {




    
  return <>
  
  <div className='container  mx-auto'>
    <div className='protfolio'>
      <h1 className='text-slate-700 text-center text-5xl font-bold pt-4 pb-4'>PROTFOLIO COMPONENT</h1>
      <div className='flex justify-center items-center'>
        <div className='bg-slate-700 mb-5 h-1 w-20'></div>
      <div className='bg-slate-700 mb-5 h-1 w-20 ms-1'></div>
      </div>

      
      </div>

      </div>


      <div className='container mx-auto'>
      <div className='flex flex-wrap'>
       <div className='w-1/3 p-2 '>
       <img className='logo1 rounded-xl' src={logo1} alt="" />
       </div>
       <div className='w-1/3 p-2'>
       <img className='logo2 rounded-xl' src={logo2} alt="" />
       </div>
       <div className='w-1/3 p-2'>
       <img className='logo3 rounded-xl' src={logo3} alt="" />
       </div>
       <div className='w-1/3 p-2'>
       <img className='logo4 rounded-xl' src={logo4} alt="" />
       </div>
       <div className='w-1/3 p-2'>
       <img className='logo5 rounded-xl' src={logo5} alt="" />
       </div>
       <div className='w-1/3 p-2'>
       <img className='logo6 rounded-xl' src={logo6} alt="" />
       </div>
       </div>

       </div>
       
       


  
  
  </>
}
