import React from 'react'
import Header from '../components/common/Header'
import {motion} from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import SalesChart from '../components/sales/SalesChart'

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
        <Header title='Sales '/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Sales Stats */}
        <motion.div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'
        initial={{opacity: 0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration: 1}}
        >
         <StatCard name='Total Revenue' icon={DollarSign} value='1235' color='#10B981'/>
            <StatCard name='Avg.Order Value' icon={ShoppingCart} value='85' color='#8B5CF6'/>
            <StatCard name='Convertion Rate' icon={TrendingUp} value='19' color='#EC4899'/>
            <StatCard name='Sales Growth' icon={CreditCard} value='19' color='#EC4899'/>
        </motion.div>

        <SalesChart/>
         

        </main>
      
    </div>
  )
}

export default SalesPage
