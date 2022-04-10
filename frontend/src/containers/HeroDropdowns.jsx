import React from 'react'
import arrowDown from '../images/Vector_down_1.svg'
import flightOut from '../images/Date_Out.svg'
import flightIn from '../images/Dat.svg'

const HeroDropdowns = () => {
  return (
    <div className='min-w-[300px] z-20 bg-white p-3 px-6 border-t-2 border-t-primary'>
      <div className="flex flex-col">
        <div className="cursor-pointer flex items-center justify-between text-black border-gray-400 p-2 rounded-md">
          <p>From</p>
          <img src={arrowDown} alt="down" />
        </div>
        <div className="cursor-pointer flex my-2 items-center justify-between text-black border-gray-400 p-2 rounded-md">
          <p>To</p>
          <img src={arrowDown} alt="down" />
        </div>
        <div className="flex my-2 items-center">
          <div className="flex-1 p-2 rounded-md ">
            <div className="flex px-2 items-center justify-between">
              <img src={flightOut} alt="" />
              <p className='text-secondary'>28/12/2022</p>
            </div>
          </div>
          <div className="flex-1 p-2 rounded-md bg-blue-500">
            <div className="flex px-2 items-center justify-between">
              <img src={flightIn} alt="" />
              <p className='text-black'>(One Way)</p>
            </div>
          </div>
        </div>  
        <div className="flex my-2 items-center">
          <div className="p-2 flex-1 rounded-md text-secondary">
            <p className='font-bold'>1 Adult</p>
          </div>
          <div className="p-2 flex-1 rounded-md text-secondary">
          <div className="flex px-2 items-center justify-between">
              <p  className='font-bold'>Economy</p>
              <img src="" alt="" />
            </div>
          </div>   
        </div>  
        <button className="bg-secondary font-bold text-xl text-white text-center p-3 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  )
}

export default HeroDropdowns