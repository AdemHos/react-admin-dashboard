import React from 'react'
import { BarChart, Bar,XAxis,YAxis,Legend, CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts'
import {motion} from 'framer-motion'

const activityData = [
  {name: 'Mon', "0-4": 20, "8-12":60, "12-16":80,"16-20":100,"20-24":120 },
  {name: 'Tue', "0-4": 30, "8-12":70, "12-16":90,"16-20":110,"20-24":130 },
  {name: 'Wed', "0-4": 40, "8-12":80, "12-16":100,"16-20":120,"20-24":140 },
  {name: 'Thu', "0-4": 50, "8-12":90, "12-16":110,"16-20":130,"20-24":150 },
  {name: 'Fri', "0-4": 60, "8-12":100, "12-16":120,"16-20":140,"20-24":160 },
  {name: 'Sat', "0-4": 70, "8-12":100, "12-16":130,"16-20":150,"20-24":170 },
  {name: 'Sun', "0-4": 80, "8-12":120, "12-16":140,"16-20":160,"20-24":180 }
]

const UserActivityHeatChart = () => {
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <h2 className='text-xl font-medium mb-4 text-gray-100'>User Activity</h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <BarChart data={activityData}>
           <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563'/>
           <XAxis dataKey={'name'} stroke='#9CA3AF'/>
           <YAxis stroke='#9CA3AF'/>
           <Tooltip
           contentStyle={{
            backgroundColor: 'rgba(31,41,55,0.8)',
            borderColor: '#4B5563'
           }}
           itemStyle={{color:'#E5E7EB'}}
           />
           <Legend/>
           <Bar dataKey='0-4' stackId='a' fill='#6366F1' />
           <Bar dataKey='8-12' stackId='a' fill='#8B5CF6' />
           <Bar dataKey='12-16' stackId='a' fill='#EC4899' />
           <Bar dataKey='16-20' stackId='a' fill='#10B981' />
           <Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
           
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserActivityHeatChart
