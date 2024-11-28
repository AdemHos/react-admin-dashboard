import React from 'react'
import {motion} from 'framer-motion'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer, Legend } from 'recharts'


const dailyOrdersData = [
    {date: '07/01',orders:55},
    {date: '07/02',orders:65},
    {date: '07/03',orders:75},
    {date: '07/04',orders:80},
    {date: '07/05',orders:90},
    {date: '07/06',orders:100},
    {date: '07/07',orders:115},
]

const DailyOrders = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 my-8'
    initial={{opacity:1,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
        <h2 className='text-xl font-semibold text-gray-100 nb-4'>Daily Orders</h2>
        

        <div style={{width:'100%',height:300}}>
         <ResponsiveContainer>
            <LineChart data={dailyOrdersData} >
           <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
           <XAxis dataKey='date' stroke='#9CA3AF'/>
           <YAxis stroke='#9CA3AF'/>
           <Tooltip contentStyle={{
            backgroundColor:  'rgba(31,41,55,0.7)',
            borderColor: '#4B5563',
           }}
           itemStyle={{color:'#E5E7EB'}}
           />
           <Legend/>
           <Line type='monotone' dataKey='orders' stroke='#8B5CF6' strokeWidth={2}/>

            </LineChart>
         </ResponsiveContainer>
        </div>
      
    </motion.div>
  )
}

export default DailyOrders