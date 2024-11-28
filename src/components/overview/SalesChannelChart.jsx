import React from 'react'
import {motion} from 'framer-motion'
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Legend,Cell } from 'recharts'


const COLORS = ['#6366F1','#EC4899','#10B981','#F59E0B','#8B5CF6']
const SALES_CHANNEL_DATA = [
  {name: 'Website',value: 41450},
  {name:'Mobile App',value:46500},
  {name:'Marketplace',value:38000},
  {name:'Social Media',value:23000}
]

const SalesChannelChart = () => {
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <h2 className='text-xl font-medium mb-4 text-gray-100'>Sales Channel</h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
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
           <Bar dataKey={'value'} fill='#8884d8'>
              {SALES_CHANNEL_DATA.map((entry,index) =>(
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
           </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesChannelChart
