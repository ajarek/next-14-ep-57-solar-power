'use client'

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
const Cart = () => {
  const {
    addItemToCart,
    items,
    increment,
    decrement,
    removeItemFromCart,
    total,
    removeAll,
  } = useCartStore()
  const { toast } = useToast()
  const date = new Date()
  const router = useRouter()

  return (
    <div className=' w-full min-h-[calc(100vh-64px)] flex flex-col max-lg:gap-8  p-4 max-sm:px-1    border-[64px] max-lg:border-[4px] border-gray-900 border-y-0 py-4'>
      {items.length > 0 ? (
        <>
          <div className=' w-full max-h-[200px] overflow-y-auto scrollbar max-sm:max-h-[400px]  p-1'>
            {items.map((item) => (
              <div
                key={item.id}
                className='w-full flex  items-center justify-between  border-b-2 border-gray-300 gap-2 mt-4 '
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className='max-sm:hidden'
                />

                <div className='flex items-center justify-between gap-4 max-sm:gap-1 '>
                  <div>{item.name}</div>
                  <div className='flex items-center gap-4'>
                    <div className='max-sm:hidden'>
                      €{item.price.toFixed(2)}
                    </div>

                    <div className='flex items-center gap-1'>
                      <button onClick={() => decrement(item.id)}>➖</button>
                      <div className='flex items-center justify-center  w-[30px] h-[30px] rounded-full border-2 border-gray-500'>
                        {item.quantity}
                      </div>
                      <button onClick={() => increment(item.id)}>➕</button>
                    </div>
                    <div> €{(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                  <button onClick={() => removeItemFromCart(item.id)}>
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-end text-xl mt-4 px-4'>
            Total: €{total().toFixed(2)}
          </div>
          <div className='flex w-full justify-end gap-8 mt-8 px-4 '>
            <Button
              variant='destructive'
              onClick={() => removeAll()}
            >
              Delete All
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: 'Order has been submitted.',
                  description:
                    'amount to pay: ' +
                    total() +
                    '€, ' +
                    'date: ' +
                    date.toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }),
                })
                setTimeout(() => {
                  removeAll()
                  router.push('/')
                }, 2000)
              }}
            >
              I order panels
            </Button>
          </div>
        </>
      ) : (
        <h1 className='text-2xl text-center py-8'>Cart is empty !</h1>
      )}
    </div>
  )
}

export default Cart
