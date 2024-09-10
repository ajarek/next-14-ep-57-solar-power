import { Button } from '@/components/ui/button'
import panels from '@/data/data.json'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

const SolarPanels = () => {
  return (
    <div className=" w-full min-h-[calc(100vh-64px)]  relative border-[64px] max-lg:border-[4px] border-gray-900 border-y-0 py-4">
      <h1 className="text-3xl font-bold text-center text-white">
        Solar Panels
      </h1>
      <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center  items-center p-4">
        {panels.map((panel) => (
          <Card key={panel.id}>
            <CardHeader>
              <div className="relative  ">
                <Image
                  src={panel.image}
                  alt="Logo"
                  width={300}
                  height={300}
                  className="object-cover  "
                  priority
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{panel.name}</CardTitle>
              <CardDescription>
                {panel.description.slice(0, 100)}...
              </CardDescription>
              <p className='mt-2'>€{panel.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/solar?id=${panel.id}&name=${panel.name}&price=${panel.price}&image=${panel.image}&description=${panel.description}&quantity=${panel.quantity}`} className='link'
              >
                Place an order
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SolarPanels
