import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const SIDEBAR_ITEMS = [
    {
        name : 'Overview',
        icon: BarChart2,
        color: '#6366f1',
       href : '/',
    },
    {
        name: 'Products',
        icon: ShoppingBag,
        color: '#EC4899',
       href: '/products',
    },
    {
        name: 'Users',
        icon : Users,
        color: '#8B5CF6',
       href : '/users',
    },
    {
        name :'Sales',
        icon : DollarSign,
        color: '#10B981',
       href : '/sales',
    },
    {
        name: 'Orders',
        icon: ShoppingCart,
        color: '#F59E0B',
        href: '/orders',
    },
    {
        name : 'Analytics',
        icon :TrendingUp,
        color: '#3B82F6',
        href: '/analytics',
    },
    {
        name : 'Settings',
        icon : Settings,
        color : '#6EE7B7',
        href: '/settings'
    }
]

const Sidebar = () => {
    const [isOpenSidebar,setIsOpenSidebar] = useState(false)
  return (
    <motion.div
    className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isOpenSidebar ? 'w-64':'w-20'}`}
    animate={{width:isOpenSidebar ? 256 : 80}}
    >
        <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          onClick={() =>setIsOpenSidebar(!isOpenSidebar)}
          className='max-w-fit p-2 rounded-full hover:bg-gray-700 transition-colors'
          >
            <Menu/>

          </motion.button>
          <nav className='mt-8 flex-grow'>
             {SIDEBAR_ITEMS.map((item) =>(
                <Link key={item.href} to={item.href}>
                <motion.div
                className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 mb-2 transition-colors'
                >
                 <item.icon size={20} style={{color:item.color,minWidth:'20px'}}/>
                 <AnimatePresence>
                    {isOpenSidebar && (
                        <motion.span
                        className='ml-4 whitespace-nowrap'
                        initial={{opacity: 0,width: 0}}
                        animate={{opacity: 1,width: 'auto'}}
                        exit={{opacity: 0,width: 0}}
                        >
                            {item.name}

                        </motion.span>
                    )}
                 </AnimatePresence>
                </motion.div>
                </Link>
             ))}
          </nav>
        </div>
      
    </motion.div>
  )
}

export default Sidebar
