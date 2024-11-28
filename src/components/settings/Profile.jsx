import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react'

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}> 
        <div className='flex flex-col sm:flex-row items-center my-6'>
           <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Profile" 
           className='w-20 h-20 rounded-full object-cover mr-4'/>

           <div>
            <h3 className="text-xl font-semibold text-gray-100">Some One</h3>
            <p className='text-sm text-gray-400 font-medium'>someone@gmail.com</p>
           </div>          
        </div>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4
           rounded w-full sm:w-auto transition duration-200'>
            Eddit Profile 
           </button>
    </SettingSection>
      
    
  )
}

export default Profile
