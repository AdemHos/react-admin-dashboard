import React from 'react'
import {motion} from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import Header from '../components/common/Header'
import DailyOrders from '../components/orders/DailyOrders'
import OrderDistribution from '../components/orders/OrderDistribution'
import OrdersTable from '../components/orders/OrdersTable'

const OrdersPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
        <Header title='Orders '/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Sales Stats */}
        <motion.div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'
        initial={{opacity: 0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration: 1}}
        >
         <StatCard name='Total Orders' icon={ShoppingBag} value='1235' color='#6366F1'/>
            <StatCard name='Pending Orders' icon={Clock} value='85' color='#F59E0B'/>
            <StatCard name='Completed Orders' icon={CheckCircle} value='191' color='#10B981'/>
            <StatCard name='Total Revenue' icon={DollarSign} value='19' color='#EC4899'/>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
         <DailyOrders/>
         <OrderDistribution/>
        </div>
        <OrdersTable/>

        
         

        </main>
      
    </div>
  )
}

export default OrdersPage
