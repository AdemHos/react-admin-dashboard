import React from 'react'
import {motion} from 'framer-motion'
import { DollarSign,ShoppingBag,Eye,ArrowDownRight,ArrowUpRight,Users } from 'lucide-react'

const overviewData = [
    {
        name: "Revenue",
        value: "$1,234,555",
        change: 12.5,
        icon: DollarSign
    },
    {
        name: "Users",
        value: "1234",
        change: -6.5,
        icon: Users
    },
    {
        name: "Orders",
        value: "555",
        change: 7.5,
        icon: ShoppingBag
    },
    {
        name: "Page Views",
        value: "2,500,000",
        change: 12.5,
        icon: Eye
    }
]

const OverviewCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-8 gap-5'>
      {overviewData.map((item,index) =>(
        <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl
        border border-gray-700 p-6'
        key={item.name}
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:index*0.1}}
        >
            <div className='flex items-center justify-between '>
              <div>
                <h3 className='text-sm font-medium text-gray-400'>
                    {item.name}
                </h3>
                <p className='font-semibold text-xl text-gray-100 mt-1'>
                  {item.value}
                </p>
              </div>
              <div className={`
                p-3 rounded-full ${item.change >0 ? 'bg-green-600 bg-opacity-20' : 'bg-red-600 bg-opacity-20'}
                `}>
                 <item.icon className={`size-6 ${item.change >=0 ? 'text-green-500': 'text-red-500'}`}/>
              </div>
            </div>
            <div className={`
                mt-4 flex items-center ${item.change >0 ? 'text-green-500': 'text-red-500'}

                `}>
                    {item.change >0 ? <ArrowUpRight size={20}/> : <ArrowDownRight size={20}/>}
                    <span className='ml-1 text-sm font-medium'>
                        {item.change}%
                    </span>
                    <span className='text-gray-400 text-sm ml-2'>vs last period</span>

            </div>

        </motion.div>
      ))}
    </div>
  )
}

export default OverviewCards
