import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Search,Eye,Edit,Trash2} from 'lucide-react'

const ordersData = [
    {
        id: "ORD001",
        customer: 'Jane Doe',
        total: 235.5,
        status: "Proccessing",
        date: "2024 11 20"
    },
    {
        id: "ORD002",
        customer: 'Sarah Jills',
        total: 255.5,
        status: "Delivered",
        date: "2024 11 20"
    },
    {
        id: "ORD003",
        customer: 'Brian Lee',
        total: 235.5,
        status: "Pending",
        date: "2024 11 20"
    },
    {
        id: "ORD004",
        customer: 'Alexa Jones',
        total: 235.5,
        status: "Shipped",
        date: "2024 11 20"
    },
    {
        id: "ORD005",
        customer: 'Helena van Dier',
        total: 235.5,
        status: "Delivered",
        date: "2024 11 20"
    },
    {
        id: "ORD006",
        customer: 'Sett March',
        total: 235.5,
        status: "Delivered",
        date: "2024 11 20"
    },
    {
        id: "ORD007",
        customer: 'Enrique Garcia',
        total: 235.5,
        status: "Shipped",
        date: "2024 11 20"
    },
    {
        id: "ORD008",
        customer: 'Paula Lena',
        total: 235.5,
        status: "Proccessing",
        date: "2024 11 20"
    },
]

const OrdersTable = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const [filteredOrders,setFilteredOrders] = useState(ordersData)
    const handleSearch = (e) => {
        // Search
     const term = e.target.value.toLowerCase()
     setSearchTerm(term)

    //  Filter Orders
    const filtered = ordersData.filter((order) => order.id.toLocaleLowerCase().includes(term) || 
  order.customer.toLocaleLowerCase().includes(term))
  setFilteredOrders(filtered)
    }
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-s-xl border border-gray-700 p-6 mt-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.4}}
    >
        <div className='flex items-center justify-between my-6'>
           <h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
           <div className='relative'>
           <input type="text" 
           className='bg-gray-700 text-white rounded-lg placeholder-gray-400 pl-10 pr-4 py-2
           focus:outline-none focus:ring-2 focus:ring-blue-500'
           placeholder='Search orders...'
           value={searchTerm}
           onChange={handleSearch}
           />
           <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
           </div>
        </div>
        
        <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
         <thead>
          <tr>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              ORDER ID
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              CUSTOMER
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              TOTAL
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              STATUS
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              DATE
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              ACTIONS              
            </th>
          </tr>
         </thead>
         <tbody className='px-6 py-3 divide-y divide-gray-700'>
           {filteredOrders.map((order) =>(
            <motion.tr
            key={order.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
            >
              <td className='flex items-center gap-2 whitespace-nowrap text-sm text-gray-100 font-medium px-6 py-4'>
                <img src="https://randomuser.me/api/portraits/women/9.jpg" alt="Order Image" className='size-10 rounded-full' />
                {order.id}
              </td>
              <td className='px-6 py-4 text-sm text-gray-100 font-medium whitespace-nowrap'>
                {order.customer}
              </td>
              <td className='text-sm px-6 py-4 whitespace-nowrap text-gray-300' >
                {order.total}
              </td>
              <td className='text-sm px-6 py-4 whitespace-nowrap text-gray-300' >
              <span className={`px-4 py-2 text-xs text-gray-100 font-medium leading-5 rounded-lg
                ${
                    order.status === "Delivered" ? "bg-green-100 text-green-800"
                    : order.status === "Proccessing"
                    ? "bg-yellow-100 text-yellow-800"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }
                `}>
                 {order.status}
                </span>
              </td>
              <td className='text-sm px-6 py-4 whitespace-nowrap text-gray-300' >
                {order.date}
              </td>
              <td className='text-sm px-6 py-4 whitespace-nowrap text-gray-300' >
                <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                  <Eye size={18}/>
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

export default OrdersTable
