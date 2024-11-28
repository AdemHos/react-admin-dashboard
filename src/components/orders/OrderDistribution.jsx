import React from 'react'
import {motion} from 'framer-motion'
import { PieChart,Pie ,Cell,ResponsiveContainer,Tooltip,Legend } from 'recharts'


const orderStatusData = [
  {name: 'Pending',value: 20},
  {name: 'Proccessing',value: 30},
  {name: 'Shipped',value: 50},
  {name: 'Delivered',value: 120},
]

const COLORS = ['#FF6B6B','#4ECDC4','#45B7D1','#FED766','#2AB7CA']

const OrderDistribution = () => {
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700 my-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
        <h2 className='text-xl font-medium mb-4 text-gray-100'>Category Distribution</h2>
        <div className='h-80 '>
         <ResponsiveContainer width={'100%'} height={'100%'}>
           <PieChart>
            <Pie
            data={orderStatusData}
            cx={'50%'}
            cy={'50%'}
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey="value"
            label={({name,percent}) => `${name} ${(percent * 100).toFixed(0)}% `}
            >
              {orderStatusData.map((entry,index) =>(
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
            <Tooltip 
            contentStyle={{
                backgroundColor: 'rgba(31,41,55,0.8)',
                borderColor: '4B5563'
            }}
            itemStyle={{color: '#E5E7EB'}}
            />
            <Legend/>
           </PieChart>
         </ResponsiveContainer>
        </div>
      
    </motion.div> 
  )
}

export default OrderDistribution
