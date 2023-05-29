import React from 'react'
import Form from './Form'
import useQuoter from '../hooks/useQuoter'
import Spinner from './Spinner';
import ShowPrice from './ShowPrice';

const AppEnsurance = () => {

    const {loading} = useQuoter();

  return (
    <>
        <header className='my-10'> 
            <h1 className='text-white text-center text-4xl font-black'>Car's ensurance quoter</h1>
        </header>

        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
            <Form />
            {loading ? <Spinner /> : <ShowPrice />}
        </main>
    </>
    
  )
}

export default AppEnsurance
