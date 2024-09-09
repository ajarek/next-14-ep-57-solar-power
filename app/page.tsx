import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" w-full min-h-[calc(100vh-64px)]  relative border-[64px] border-gray-900 border-y-0">
      <Image
        src="/images/solar-1.jpg"
        alt="Logo"
        fill={true}
        className="object-cover "
        priority
      />
      <div className="absolute top-1/2 left-1/2   text-3 -translate-x-[50%] -translate-y-[50%] text-center   yellow text-[80px] font-light ">
        Solar Power
      </div>
      <div className="absolute z-10 left-8 top-8 flex gap-2 border-2 border-white p-2 rounded-md">
        <div className="relative">
          <Image
            src="/images/panel-2.png"
            alt=" Logo"
            width={100}
            height={100}
            className="object-cover "
            priority
          />
        </div>
        <div className="text-white flex flex-col gap-2">
          <h1>ALLPOWERS SP029 </h1>
          <p>Panel 140W</p>
          <p>€169,00</p>
          <Link
            href={`/solar?id=4&name=ALLPOWERS SP033 Portable Polycrystalline Solar Panel 200W&price=169&image=https://iallpowers.eu/cdn/shop/products/ALLPOWERS120WPortableSolarPanelChargerforLaptops_PowerStation_FoldableUSSolarCellSolarChargerwithMC-4_DC_andUSBOutput_forMostSolarGenerator_PowerStation_Cellphone2_1800x1800_f1c250d9-2012-4802-a87f-1ddf2df2a8bf.jpg?v=1680671089&width=800}&description=Solar Connector Output can deliver 25A(max)current while the DC port only carries 10A, Dual USB port(5V/2.4A per port) for charging your 5V powered gadgets, and 18V DC output(18V/3A) for charging your laptop or 12V car battery and portable generator, the junction box parallel connecting port for connecting multiple foldable solar panels.&quantity=1`}
            className="link"
          >
            Place an order
          </Link>
        </div>
      </div>
      <div className="absolute z-10 right-8 bottom-8 flex gap-2 border-2 border-white p-2 rounded-md">
        <div className="relative">
          <Image
            src="/images/panel-1.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-cover "
            priority
          />
        </div>
        <div className="text-white flex flex-col gap-2">
          <h1>Monocrystalline solar panel </h1>
          <p>Panel 290W </p>
          <p>€300,00</p>
          <Link
            href={`/solar?id=9&name=ALLPOWERS Monocrystalline Solar Panel - 290 W&price=300&image=https://assets.expondo.com/asset/product_photos/10062430_photo_1?twic=v1/contain=1024x500&description=The MSW monocrystalline solar panel makes it easier to start using renewable energy! Thanks to its high energy efficiency, a powerful photovoltaic battery converts 23% of solar energy into electricity. The monocrystalline structure combined with the latest shunt technology enables high efficiency even in the shade. Thanks to its small size, the solar panel can be conveniently used at home and in the garden, as well as on a campsite or on a boat.&quantity=1`}
            className="link"
          >
            Place an order
          </Link>
        </div>
      </div>
    </main>
  )
}
