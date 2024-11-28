import React from 'react'
import {motion} from 'framer-motion'
import { LineChart,Line, XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts'


const salesData = [
    {name: 'Jul',sales:1200},
    {name: 'Aug',sales:2100},
    {name: 'Sep',sales:1600},
    {name: 'Oct',sales:1800},
    {name: 'Nov',sales:2500},
    {name: 'Dec',sales:4500},
    {name: 'Jan',sales:3400},
    {name: 'Feb',sales:3700},
    {name: 'Mar',sales:4000},
    {name: 'Apr',sales:3200},
    {name: 'May',sales:5400},
    {name: 'Jun',sales:3600},
  ]

const SalesTrendChart = () => {
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <h2 className='font-medium text-xl text-gray-100 mb-4'>Sales Overview</h2>
      <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
         <LineChart data={salesData}>
          <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563'/>
          <XAxis dataKey={'name'}/>
          <YAxis stroke={'#4B5563'}/>
          <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31,41,55,0.8)",
            borderColor: '#4B5563',
          }}
          itemStyle={{color: '#E5E7EB'}}
          />
            <Line
            type='monotone'
            dataKey='sales'
            stroke='#6366F1'
            dot={{fill:'#ffff',strokeWidth: 1,r: 3}}
            />
         </LineChart>
        </ResponsiveContainer>
      </div>
      
    </motion.div>
  )
}

export default SalesTrendChart
