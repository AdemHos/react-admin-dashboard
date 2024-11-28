import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Edit,Trash2, Search } from 'lucide-react'


const PRODUCT_DATA = [
    {
        id : 1,
        name: 'Smart TV',
        category: 'Electronics',
        price: '499,99',
        sales: 320,
        stock: 20
    },
    {
        id : 2,
        name: 'Air Frier',
        category: 'Home',
        price: '199,99',
        sales: 600,
        stock: 190
    },
    {
        id : 3,
        name: 'Treadmill',
        category: 'Sports & Fitness',
        price: '350,50',
        sales: 45,
        stock: 255
    },
    {
        id : 4,
        name: 'Suit',
        category: 'Clothing',
        price: '99,90',
        sales: 150,
        stock: 200
    },
    {
        id : 5,
        name: 'Jewel Box',
        category: 'Accessories',
        price: '1000',
        sales: 5,
        stock: 15
    }
]

const ProductTable = () => {
  const [searchTerm,setSearchTerm] = useState("")
  const [filteredProducts,setFilteredProducts] = useState(PRODUCT_DATA)
  const handleSearch = (e) => {
    // Search Product
    const term = e.target.value.toLowerCase();
    setSearchTerm(term)

    // Filter Product
    const filtered = PRODUCT_DATA.filter(product => product.name.toLocaleLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  )
  setFilteredProducts(filtered)


  }

  return (
    <motion.div
    className='bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-lg  rounded-xl p-6 border border-gray-700 mb-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
      <div className='flex items-center justify-between mb-6'>
        <h2 className='font-medium text-xl text-gray-100 mb-4'>Product List</h2>
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
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
         <thead>
          <tr>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Name
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Category
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Price
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Stock
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Sales
              
            </th>
            <th className='py-3 px-6 text-left text-xs text-gray-400 font-medium uppercase tracking-wider'>
              Actions              
            </th>
          </tr>
         </thead>
         <tbody className='px-6 py-3 divide-y divide-gray-700'>
           {filteredProducts.map((product) =>(
            <motion.tr
            key={product.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
            >
              <td className='flex items-center gap-2 whitespace-nowrap text-sm text-gray-100 font-medium px-6 py-4'>
                <img src="https://plus.unsplash.com/premium_photo-1664302149029-50514758ed8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" className='size-10 rounded-full' />
                {product.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-100 font-medium whitespace-nowrap'>
                {product.category}
              </td>
              <td className='px-6 py-4 text-sm text-gray-100 font-medium whitespace-nowrap'>
                {product.price}
              </td>
              <td className='px-6 py-4 text-sm text-gray-100 font-medium whitespace-nowrap'>
                {product.stock}
              </td>
              <td className='px-6 py-4 text-sm text-gray-100 font-medium whitespace-nowrap'>
                {product.sales}
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

export default ProductTable
