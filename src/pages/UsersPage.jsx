import React from 'react'
import {motion} from 'framer-motion'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import UsersTable from '../components/users/UsersTable'
import UserGrowthChart from '../components/users/UserGrowthChart'
import UserActivityHeatChart from '../components/users/UserActivityHeatChart'
import UserDemographigsChart from '../components/users/UserDemographigsChart'

const userStats = {
    totalUsers: 155345,
    newUsersToday: 150,
    activeUsers: 75999,
    churmRate: "2,6%"
}


const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
      <Header title='Users'/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 '>
          <motion.div 
          className= 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity: 0,y:200}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          >
            {/* Stat Cards */}
            <StatCard name='Total User' icon={UsersIcon} value={userStats.totalUsers.toLocaleString()} color='#6366F1'/>
            <StatCard name='New Users' icon={UserPlus} value={userStats.newUsersToday} color='#8B5CF6'/>
            <StatCard name='Active Users' icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color='#10B981'/>
            <StatCard name='Churm Users' icon={UserX} value={userStats.churmRate} color='F59E0B'/>
            </motion.div> 
            
            {/* Users Table */}
            <UsersTable/>

            {/* User Chart */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
            <UserGrowthChart/>
            <UserActivityHeatChart/>
            <UserDemographigsChart/>
            </div>
      </main>
    </div>
  )
}

export default UsersPage
