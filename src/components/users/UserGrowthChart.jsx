import React from 'react'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,ResponsiveContainer,Tooltip } from 'recharts'
import {motion} from 'framer-motion'


const userGrowthData = [
    {month: 'Jan', users: 1500},
    {month: 'Fed', users: 2500},
    {month: 'Mar', users: 3500},
    {month: 'Apr', users: 4500},
    {month: 'May', users: 5500},
    {month: 'Jun', users: 7500}
]

const UserGrowthChart = () => {
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <h2 className='font-medium text-xl text-gray-100 mb-4'>Users Growth</h2>
      <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
         <LineChart data={userGrowthData}>
          <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563'/>
          <XAxis dataKey={'month'}/>
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
            dataKey='users'
            stroke='#6366F1'
            dot={{fill:'#6366F1',strokeWidth: 1,r: 3}}
            />
         </LineChart>
        </ResponsiveContainer>
      </div>
      
    </motion.div>
  )
}

export default UserGrowthChart
