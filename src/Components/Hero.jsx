import { StarIcon } from 'lucide-react'
import React from 'react'
import { useAuth } from '../contexts/AuthContext' // import your auth context
import { useNavigate } from 'react-router-dom'

const HeroI = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  // Get first name from displayName (assuming Firebase user has it)
  const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'User'

  return (
    <div className="flex flex-col items-center  pt-25 space-y-8">
      {/* Top Section */}
      <div className="text-center max-w-xl space-y-4">
        <p className="text-primary gap-2 items-center flex justify-center">
          <StarIcon className='size-4'/> Welcome Back
        </p>
        <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter'>
          Hi {firstName}, what do you need help with today?
        </h3>
        <p className="text-gray-600">
          Connect with skilled artisans in your area. From home repairs to personal services, we&apos;ve got you covered.
        </p>
        <button onClick={()=>{navigate('/artisans')}} className="text-sm rounded-xl px-10 bg-secondary shadow text-white hover:bg-blue-700 transition">
          Find Artisans Near You
        </button>
      </div>

      {/* Verified Solar Section */}
      <div className="w-full flex flex-col items-center bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl shadow-lg">
        <button className="text-sm font-semibold uppercase bg-secondary border-0">New</button>
        <h3 className="text-xl font-bold mt-2">
          Verified Solar Installers in Lagos!
        </h3>
        <p className="mt-2 text-sm">
          Get clean, renewable energy solutions from certified professionals.
        </p>
      </div>
    </div>
  )
}

export default HeroI
