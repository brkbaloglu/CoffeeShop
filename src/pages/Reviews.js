import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
function Reviews() {
  return (
    <div className='flex items-center justify-center flex-col my-10'>
      <h1 className='font-bold text-4xl'>Customer Reviews</h1>
      <div className='grid grid-cols-4 mt-10'>
        <div className='flex items-center justify-center flex-col mx-10'>
          <img className='w-[300px] h-[200px]' src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h5>Customer 1</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates?</p>
          <div className='flex items-center justify-center'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiOutlineStar/>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col mx-10'>
          <img className='w-[300px] h-[200px]' src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h5>Customer 2</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates?</p>
          <div className='flex items-center justify-center'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col mx-10'>
          <img className='w-[300px] h-[200px]' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h5>Customer 3</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates?</p>
          <div className='flex items-center justify-center'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiOutlineStar/>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col mx-10'>
          <img className='w-[300px] h-[200px]' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h5>Customer 4</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates?</p>
          <div className='flex items-center justify-center'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews