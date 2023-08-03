import React from 'react'

function Products() {
  return (
    <div className='flex items-center justify-center flex-col my-10 mx-10'>
      <h1 className='font-bold text-4xl'>Our Products</h1>
      <div className='grid grid-cols-4'>
        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-97_720x720.png" alt="" />
          <h1>Limonlu Cheesecake</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-98_720x720.png" alt="" />
          <h1>Brownie Cheesecake</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-105_720x720.png" alt="" />
          <h1>Kremalı Havuçlu Kek</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-101_720x720.png" alt="" />
          <h1>Belçika Çikolatalı Pasta</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-7_720x720.png" alt="" />
          <h1>Brownie</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-100_720x720.png" alt="" />
          <h1>Mozaik Pasta</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://d2eiylesx4iyph.cloudfront.net/files/8lkb3zxjm-mozaik-kek.jpg" alt="" />
          <h1>Mozaik Kek</h1>
        </div>

        <div className='flex items-center justify-center flex-col mx-5 my-5'>
          <img src="https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-88_720x720.png" alt="" />
          <h1>Belçika Çikolatalı Muffin</h1>
        </div>
      </div>
    </div>
  )
}

export default Products