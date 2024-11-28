import React from 'react'
import {motion} from 'framer-motion'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'

import ProductTable from '../components/products/ProductTable'
import StatCard from '../components/common/StatCard'
import Header from '../components/common/Header'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesTrendChart from '../components/products/SalesTrendChart'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
      <Header title='Products '/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 '>
          <motion.div 
          className= 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity: 0,y:200}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          >
            {/* Stat Cards */}
            <StatCard name='Total Products' icon={Package} value='1235' color='#6366F1'/>
            <StatCard name='Top Selling' icon={TrendingUp} value='85' color='#8B5CF6'/>
            <StatCard name='Low Stock' icon={AlertTriangle} value='19' color='#EC4899'/>
            <StatCard name='Total Revenue' icon={DollarSign} value='$12565' color='#10B981'/>
            </motion.div> 
            
            {/* Table Section */}
            <ProductTable/>

            {/* Charts */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <SalesTrendChart/>
              <CategoryDistributionChart/>
            </div>
      </main>
    </div>
  )
}

export default ProductsPage
