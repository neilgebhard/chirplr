import { Link } from 'react-router-dom'
import { ChatAlt2Icon } from '@heroicons/react/solid'

const Splash = () => {
  return (
    <div className='h-screen flex items-center justify-center px-1'>
      <div className='w-96'>
        <ChatAlt2Icon className='h-12 w-12 mb-10 text-blue-500 mx-auto' />
        <p className='text-4xl font-bold mb-10'>Happening now</p>
        <p className='text-2xl font-bold mb-10'>Join Chirplr today.</p>
        <Link
          className='bg-blue-500 hover:bg-blue-600 text-white text-center border-gray-400 rounded-full py-2 px-4 mb-4 font-bold block w-full'
          to='/signup'
        >
          Sign up
        </Link>
        <Link
          className='bg-white hover:bg-blue-50 text-blue-500 text-center border border-gray-400 rounded-full py-2 px-4 font-bold block w-full'
          to='/login'
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Splash
