import {motion} from 'framer-motion'
import { Trash2 } from 'lucide-react'

const DangerZone = () => {
  return (
    <motion.div
    className='bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6
    border border-red-700 my-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2,duration:0.3}}
    >
      <div className='flex items-center my-4'>
       <Trash2 className='text-red-400 mr-3 ' size={24}/>
       <h2 className='text-gray-100 text-xl font-semibold'>Danger Zone</h2>
      </div>
      <p className='text-gray-200 my-4'>Permanetly delete your account and all of your content</p>
      <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-200 text-white'>
          Delete Account
      </button>

    </motion.div>
  )
}

export default DangerZone
