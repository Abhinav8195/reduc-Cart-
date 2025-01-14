import React from 'react'
import { useDispatch } from 'react-redux'
import { removefromcart } from '../../store/slices/cart-slice'

const CartTile = ({ cart }) => {
  const dispatch = useDispatch()

  function handleRemovefromCart() {
    dispatch(removefromcart(cart.id))
  }

  return (
    <div className='flex items-center p-5 justify-between bg-red-700 mt-2 mb-2 rounded-xl w-full'>
      <div className='flex p-3'>
        <img className='h-28 rounded-lg' src={cart?.image} alt={cart?.title} />
        <div className='ml-10 self-start space-y-5'>
          <h1 className='text-xl text-white font-bold'>{cart?.title}</h1>
          <p className='text-white font-extrabold'>$ {cart?.price}</p>
        </div>
      </div>
      <div>
        <button onClick={handleRemovefromCart} className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>
          Remove From Cart
        </button>
      </div>
    </div>
  )
}

export default CartTile
