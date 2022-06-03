import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/auth'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormError from '../components/FormError'
import { GiKiwiBird } from 'react-icons/gi'

interface IFormInputs {
  name: string
  username: string
  email: string
  password: string
}

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required()

const Signup = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IFormInputs) => {
    setError('')
    axios
      .post('/api/users', data)
      .then(({ data }) => {
        setUser(data)
        navigate(`/`)
      })
      .catch((e) => {
        setError('Account registration failed.')
      })
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-1'>
      <div className='w-96'>
        <form onSubmit={handleSubmit(onSubmit)} data-testid='form'>
          <GiKiwiBird size='3rem' className='my-10  text-blue-500 mx-auto' />
          <h1 className='block mb-10 text-2xl font-bold'>
            Sign up for chirplr
          </h1>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
            id='name'
            type='text'
            {...register('name')}
          />
          <FormError message={errors.name?.message} />
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mleading-tight focus:outline-none focus:bg-white focus:border-blue-500'
            id='username'
            type='text'
            {...register('username')}
          />
          <FormError message={errors.username?.message} />
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
            id='email'
            type='text'
            {...register('email')}
          />
          <FormError message={errors.email?.message} />
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
            type='password'
            id='password'
            {...register('password')}
          />
          <FormError message={errors.password?.message} />
          <button
            className='bg-black hover:bg-gray-800 text-white inline-block rounded-full py-2 px-4 mt-3 font-bold w-full'
            type='submit'
          >
            Sign up
          </button>
        </form>
        <FormError message={error} />
        <p className='mt-10 mb-4'>Already have an account?</p>
        <Link
          className='bg-white hover:bg-blue-50 text-blue-500 text-center border border-gray-400 rounded-full py-2 px-4 font-bold block w-full'
          to='/login'
        >
          Log in
        </Link>
      </div>
    </div>
  )
}

export default Signup
