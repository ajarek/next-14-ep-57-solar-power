'use client'

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'

const Cart = () => {
  const { addItemToCart, items, increment, decrement, removeItemFromCart, total } =
    useCartStore()

  return (
    <div className=" w-full min-h-[calc(100vh-64px)] flex flex-col max-lg:gap-8  p-4     border-[64px] border-gray-900 border-y-0 py-4">
      <div className=" w-full max-h-[200px] overflow-y-auto scrollbar max-sm:max-h-[400px]  p-2">
        {items.length > 0 &&
          items.map((item) => (
            <div
              key={item.id}
              className="w-full flex  items-center justify-between  border-b-2 border-gray-300 gap-2 mt-4 "
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
              />

              <div className="flex items-center justify-between gap-4 ">
                <div>{item.name}</div>
                <div className="flex items-center gap-4">
                  <div>€{item.price.toFixed(2)}</div>

                  <div className="flex items-center gap-1">
                    <button onClick={() => decrement(item.id)}>➖</button>
                    <div className="flex items-center justify-center  w-[30px] h-[30px] rounded-full border-2 border-gray-500">
                      {item.quantity}
                    </div>
                    <button onClick={() => increment(item.id)}>➕</button>
                  </div>
                  <div> €{(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button onClick={() => removeItemFromCart(item.id)}>❌</button>
              </div>
            </div>
          ))}
      </div>
      <div className='w-full flex items-center justify-end text-xl mt-4 px-4'>Total: €{(total()).toFixed(2)}</div>
    </div>
  )
}

export default Cart
