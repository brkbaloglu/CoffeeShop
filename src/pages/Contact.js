import React from 'react'

function Contact() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='font-bold text-4xl my-10'>Contact Us</h1>
      <form action="" className='flex items-center justify-center flex-col'>
        <input className='w-[500px] my-2 p-2 rounded-xl placeholder:text-black' type="text" name="" placeholder='Enter your name' id="" />
        <input className='w-[500px] my-2 p-2 rounded-xl placeholder:text-black' type="email" name="" placeholder='Enter your email' id="" />
        <input className='w-[500px] my-2 p-2 rounded-xl placeholder:text-black' type="number" name="" placeholder='Enter your number' id="" />
        <textarea className='w-[500px] resize-none my-2 p-2 rounded-xl placeholder:text-black' name="" placeholder='Enter your message' id="" cols="30" rows="10"></textarea>
        <button type="submit" className='px-6 py-3 mt-2 bg-white text-black border-2 hover:bg-black hover:text-white rounded-xl'>Submit</button>
      </form>
    </div>
  )
}

export default Contact