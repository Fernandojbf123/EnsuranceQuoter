import React from 'react'
import useQuoter from '../hooks/useQuoter'

const ErrorMsg = () => {

    const {error} = useQuoter();
  
    return (
        <div className='border text-center border-red-400 bg-red-100 py-3 text-red-700'>

            {error}
        </div>
  )
}

export default ErrorMsg
