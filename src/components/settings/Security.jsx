import { Lock } from "lucide-react"
import SettingSection from "./SettingSection"
import ToggleSwitch from "./ToggleSwitch"
import { useState } from "react"

const Security = () => {
    const [twoFactor,setTwoFactor] = useState(false)
  return (
    <SettingSection title={'Security'} icon={Lock}>
     <ToggleSwitch
     label={'Two-Factor Authentication'}
     isOn={twoFactor}
     onToggle={() =>setTwoFactor(!twoFactor)}
     />
     <div className="mt-4">
       <button className='bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4
           rounded w-full sm:w-auto transition duration-200'>Change Password</button>
     </div>
    </SettingSection>
  )
}

export default Security
