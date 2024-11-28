import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AreaChart,Area,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer } from 'recharts'

const monthlySalesData = [
    {month: "Jan",sales: 4000},
    {month: "Feb",sales: 3000},
    {month: "Mar",sales: 5000},
    {month: "Apr",sales: 7000},
    {month: "May",sales: 6000},
    {month: "Jun",sales: 2000},
    {month: "Jul",sales: 9000},
]

const SalesChart = () => {
    const [selectedTimeRange,setSelectedTimeRange] = useState('This Month');
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-xl border border-gray-700 mt-8'
    initial={{opacity: 0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >


       <div className='flex items-center justify-between mt-6'>
          <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

          <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          >
          <option>This Week</option>t
          <option>This Month</option>t
          <option>This Quarter</option>t
          <option>This Year</option>t
          </select>
       </div>

       <div className='w-full h-80'>
          <ResponsiveContainer>
            <AreaChart data={monthlySalesData}>
            <CartesianGrid strokeDasharray={'3 3'} stroke='#374151'/>
            <XAxis dataKey={'month'} stroke='#9CA3AF'/>
            <YAxis stroke='#9CA3AF'/>
            <Tooltip
            contentStyle={{backgroundColor:'rgba(31,41,55,0.8)',borderColor: '#4B5563'}}
            itemStyle={{color: '#E5E7EB'}}

            />
            <Area type='monotone' dataKey='sales' stroke='#10B981' fill='#10B981' fillOpacity={0.3}/>
            </AreaChart>
          </ResponsiveContainer>
       </div>
    </motion.div>

  )
}

export default SalesChart
