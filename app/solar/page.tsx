'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import panels from '@/data/data.json'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
const SolarPanel = ({searchParams,}: {searchParams: {
    id: string
    name: string
    price: string
    image: string
    description: string
    quantity: string
  }
}) => {

  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  type Cart = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
    description: string
  }
  const[ quantityPanel,setQuantityPanel]=useState<Number>(+searchParams.quantity)
  const panel = panels.find((pl) => pl.id === +searchParams.id)

  const increment=() =>{
    const actualQuantity=Number(quantityPanel) + 1
   setQuantityPanel(actualQuantity)
    
  }

 const decrement=() =>{
  const actualQuantity=+quantityPanel<1?Number(quantityPanel) - 1:1
  setQuantityPanel(actualQuantity)
     
}

const handleCart = (item: Cart) => {
  if (items.some((i) => i.id === item.id)) return
  const newItem = { ...item, quantity: +quantityPanel }
  addItemToCart(newItem)
  router.push('/cart')
  setQuantityPanel(1)
}

  return (
    <div className=" w-full min-h-[calc(100vh-64px)] grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-8  p-4 place-items-center items-center   border-[64px] max-lg:border-[4px] border-gray-900 border-y-0 py-4">
      <div className="relative  ">
        <Image
          src={panel?.image || ''}
          alt="Logo"
          width={400}
          height={400}
          className="object-cover  "
          priority
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{panel?.name}</h1>
        <p>{panel?.description}</p>
        <p>€{panel?.price}</p>

        <div className="flex items-center gap-2 ">
          <Button size={'icon'} className='bg-transparent rounded-full' onClick={() => decrement()}>➖</Button>
          <div className="w-9 h-9 flex items-center justify-center  rounded-full border-2 border-gray-500">
            {quantityPanel.toString()}
          </div>
          <Button size={'icon'} className='bg-transparent rounded-full' onClick={() => increment()}>➕</Button>
          
        </div>
        <Button
              className='flex gap-2 items-center  hover:font-bold transition-all'
              onClick={() => handleCart(panel?panel:{id:0,name:'',price:0,quantity:0,image:'',description:''})}
            >
              Add to Cart
            </Button>
      </div>
    </div>
  )
}

export default SolarPanel
