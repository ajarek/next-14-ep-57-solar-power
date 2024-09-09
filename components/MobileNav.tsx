'use client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'

const MobileNav = () => {
  const pathname = usePathname()
  const { lengthItems } = useCartStore()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden "
      >
        <SheetHeader>
        <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Image src={'/images/sun.svg'} width={50} height={50} alt={'logo'} className='rounded-sm '/>
        <h1 className='font-semibold text-xl yellow capitalize '>
        SunPowerVault
        </h1>
      </Link>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 text-gray-400">
        <Link
          href='/about'
          className={`flex items-center  text-xl hover:text-primary   ${
            pathname === '/home' ? 'active ' : ''
          }`}
        >
          About
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
          className={`w-fit flex items-center text-gray-500 text-xl hover:bg-[hsl(60,90%,50%)] gap-4 bg-[#ffff00] py-1 px-3 rounded-sm `}
        >
          Your cart
          <div className='flex items-center'>
          <ShoppingCart size={24} className='' />
          <div className='pb-2'>{lengthItems()}</div>

          </div>
        </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
