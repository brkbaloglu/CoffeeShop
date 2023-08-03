import React from 'react'

function Coffee() {
  return (
    <div className='flex items-center justify-center flex-col my-10'>
      <h1 className='font-bold text-4xl'>Our Coffees</h1>
      <div className='grid grid-cols-3'>
        <div className='flex items-center justify-center flex-col'>
          <img src="https://i.hizliresim.com/rd25vzh.png" alt="" />
          <h1>Filtre Kahve</h1>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <img src="https://i.hizliresim.com/m92brrv.png" alt="" />
          <h1>Türk Kahvesi</h1>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <img src="https://i.hizliresim.com/i5a6ski.png" alt="" />
          <h1>White Hot Chocolate</h1>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <img src="https://i.hizliresim.com/szqu2qh.png" alt="" />
          <h1>Cold Brew</h1>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <img src="https://i.hizliresim.com/cfjaj24.png" alt="" />
          <h1>Caramel Cream Frappuccino</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Coffee