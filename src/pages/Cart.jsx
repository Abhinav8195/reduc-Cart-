import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartTile from '../components/cart-tile/CartTile'

const Cart = () => {
  const [totalCart, setCartTotal] = useState(0)
  const { cart } = useSelector((state) => state)

  useEffect(() => {
    setCartTotal(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  console.log(cart, totalCart)

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto p-4">
            <div className="flex flex-col justify-center items-center">
              {cart.map((item) => (
                <CartTile key={item.id} cart={item} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[300px] lg:ml-5">
            <div className="flex flex-col justify-center items-center lg:items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
              <p>
                <span className="text-gray-800 font-bold">Total Items</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: ${totalCart.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-red-800 font-bold text-xl mb-2">Your Cart Is Empty..! Go Start Shopping Now</h1>
          <Link to={'/'}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
