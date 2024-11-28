import React from 'react'
import { LineChart,Line, XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts'
import {motion} from 'framer-motion'


const salesData = [
  {name: 'Jul',sales:4200},
  {name: 'Aug',sales:3700},
  {name: 'Sep',sales:5300},
  {name: 'Oct',sales:6100},
  {name: 'Nov',sales:4500},
  {name: 'Dec',sales:7300},
  {name: 'Jan',sales:6400},
  {name: 'Feb',sales:5800},
  {name: 'Mar',sales:6700},
  {name: 'Apr',sales:6400},
  {name: 'May',sales:7200},
  {name: 'Jun',sales:7500},
]



const SalesOverviewChart = () => {
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
            dot={{fill:'#6366F1',strokeWidth: 2,r: 6}}
            />
         </LineChart>
        </ResponsiveContainer>
      </div>
      
    </motion.div>
  )
}

export default SalesOverviewChart
