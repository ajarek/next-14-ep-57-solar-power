'use client'

import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'
const Links = () => {
  const pathname = usePathname()
  const { lengthItems } = useCartStore()
  return (
    <div className='max-lg:hidden w-full flex items-center justify-between text-gray-400  '>
      <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Image src={'/images/sun.svg'} width={50} height={50} alt={'logo'} className='rounded-sm '/>
        <h1 className='font-semibold text-xl yellow capitalize '>
        SunPowerVault
        </h1>
      </Link>

      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href='/contact'
          className={`flex items-center  text-xl hover:text-primary   ${
            pathname === '/home' ? 'active ' : ''
          }`}
        >
          Contact
        </Link>

        <Link
          href='/solar-panels'
          className={`flex items-center  text-xl hover:text-primary `}
        >
          Solar panels
        </Link>
       
        <Link
          href='/reviews'
          className={`flex items-center  text-xl hover:text-primary `}
        >
          Reviews
        </Link>
        <Link
          href='/cart'
          className={`flex items-center text-gray-500 text-xl hover:bg-[hsl(60,90%,50%)] gap-4 bg-[#ffff00] py-1 px-3 rounded-sm `}
        >
          Your cart
          <div className='flex items-center'>
          <ShoppingCart size={24} className='' />
          <div className='pb-2'>{lengthItems()}</div>

          </div>
        </Link>
      </div>
    </div>
  )
}

export default Links
