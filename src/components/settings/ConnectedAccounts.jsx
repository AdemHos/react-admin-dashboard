import { useState } from "react"
import SettingSection from "./SettingSection"
import { HelpCircle, Plus } from "lucide-react"
import { div } from "framer-motion/client"

const ConnectedAccounts = () => {
    const [connectedAccounts,setConnectedAccounts] = useState([
        {
            id: 1,
            name: 'Google',
            connected: true,
            icon: '/google.png'
        },
        {
            id: 2,
            name: 'Facebook',
            connected: false,
            icon: '/facebook.svg'
        },
        {
            id: 3,
            name: 'X',
            connected: true,
            icon: '/x.png'
        }
    ])
  return (
    <SettingSection icon={HelpCircle} title={'Connected Accounts'}>
         {connectedAccounts.map((account) =>(
            <div className="flex items-center justify-between py-3" key={account.id}>
              <div className="flex gap-1">
              <img src={account.icon} alt="Social Icon" className="size-6 object-cover mr-4 rounded-full" />
               <span className="text-gray-200">
                {account.name}
               </span>
              </div>
              <button className={`
                px-3 py-1 rounded ${account.connected ? 'bg-green-600 hover:bg-green-700':'bg-gray-700' }
                `}
                onClick={() => {
                    setConnectedAccounts(
                        connectedAccounts.map((acc) => {
                            if(acc.id === account.id) {
                                return {
                                    ...acc,
                                    connected: !acc.connected
                                }
                            }
                            return acc
                        })
                    )
                }}>
                    {account.connected ? 'Connected': 'Connect'}

              </button>
            </div>
         ))}
         <button className="flex items-center mt-4 text-indigo-400 hover:text-indigo-300 transition duration-200">
          <Plus size={18} className="mr-2"/>  Add Account
         </button>
    </SettingSection>
  )
}

export default ConnectedAccounts
