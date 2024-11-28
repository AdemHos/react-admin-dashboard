import React from 'react'
import {motion} from 'framer-motion'
import { PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend } from 'recharts'

const userDemographicsData = [
  {name: "18-24", value:20},
  {name: "25-34", value:40},
  {name: "35-44", value:30},
  {name: "45-54", value:25},
  {name: "55+", value:15},
]

const COLORS = ['#82ca9d','#ffc658','#ff8042','#0088FE']

const UserDemographigsChart = () => {
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700 lg:col-span-2'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
        <h2 className='text-xl font-medium mb-4 text-gray-100'>User Demographics</h2>
        <div className='h-80 '>
         <ResponsiveContainer style={{width: "100%",height:"300"}}>
           <PieChart>
            <Pie
            data={userDemographicsData}
            cx={'50%'}
            cy={'50%'}
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey="value"
            label={({name,percent}) => `${name} ${(percent * 100).toFixed(0)}% `}
            >
              {userDemographicsData.map((entry,index) =>(
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

export default UserDemographigsChart
