import Links from '@/components/Links'
import MobileNav from './MobileNav'
import { ModeToggle } from '@/components/ModeToggle'

const Navbar = async () => {
  return (
    <div className='h-16 bg-gray-900 w-full  flex justify-between items-center gap-4  px-16 max-sm:px-2  '>
      <div className='w-full flex items-center gap-2 '>
        <Links />
      </div>
      <div className=' flex justify-between items-center italic gap-6  '>
        <ModeToggle />
        <div className='w-full max-w-[264px] lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
