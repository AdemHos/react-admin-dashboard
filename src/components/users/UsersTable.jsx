import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Search,Edit,Trash2 } from 'lucide-react'

const userData = [
    {
        id: 1,
        name : 'John Doe',
        email: 'johnd@gmail.com',
        role: 'Customer',
        status: 'Active'
    },
    {
        id: 2,
        name : 'Elena Schwartz',
        email: 'elenasch@gmail.com',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 3,
        name : 'Robie Tath',
        email: 'robthd@gmail.com',
        role: 'Customer',
        status: 'Inactive'
        
    },
    {
        id: 4,
        name : 'Antonio Roseman',
        email: 'antonrose@gmail.com',
        role: 'Moderator',
        status: 'Active'
    },
    {
        id: 5,
        name : 'Rachel Garcia',
        email: 'rclgrs@gmail.com',
        role: 'Customer',
        status: 'Active'
    },
    
]

const UsersTable = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const [filteredUsers,setFilteredUsers] = useState(userData)

    const handleSearch = (e) => {
        // Search Product
        const term = e.target.value.toLowerCase();
        setSearchTerm(term)
    
        // Filter Users
        const filtered = userData.filter(user => user.name.toLocaleLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      )
      setFilteredUsers(filtered)
    
    
      }
  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700 mb-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
       
       <div className='flex items-center justify-between mb-6'>
        <h2 className='font-medium text-xl text-gray-100 mb-4'>Users List</h2>
        <div className='relative '>
            <input type="text"
            placeholder='Search Products...'
            className='bg-gray-700 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none
            focus:ring-2 focus:ring-blue-500'
            onChange={handleSearch}
            value={searchTerm}
             />
             <Search className='absolute left-3 top-2.5 text-gray-400' size={16}/>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Name
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Email
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Role
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Status
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Actions
              
            </th>
            
          </tr>
         </thead>
         <tbody className='divide-y divide-gray-700'>
           {filteredUsers.map((user) =>(
            <motion.tr key={user.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
            >
               <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                       <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-medium'>
                        {user.name.charAt(0)}
                       </div>
                    </div>
                    <div className='ml-4'>
                       <div className='text-sm font-medum text-gray-100'>
                        {user.name}
                       </div>
                    </div>
                </div>
               </td>
               <td className="px-6 py-4 whitespace-nowrap"> 
                 <div className="text-sm text-gray-300">
                    {user.email}
                 </div>
               </td>
               <td className="px-6 py-4 whitespace-nowrap"> 
                 <span className='px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                   {user.role}
                 </span>
               </td>
               <td className="px-6 py-4 whitespace-nowrap"> 
                 <span 
                 className={`px-2 text-xs leading-5 font-semibold inline-flex rounded-full ${
                    user.status === 'Active'
                    ? 'bg-green-800 text-white'
                    : 'bg-red-700 text-white'
                 }`}>
                    {user.status}
                   
                 </span>
               </td>
               <td className='px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap'>
                <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                  <Edit size={18}/>
                </button>
                <button className='text-red-400 hover:text-red-300'>
                 <Trash2 size={18}/>
                </button>
              </td>
            </motion.tr>
           ))}
         </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default UsersTable