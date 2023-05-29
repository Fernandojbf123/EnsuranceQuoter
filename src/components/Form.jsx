import {React} from 'react'
import { BRANDS, YEARS, PLANS } from '../constants'
import useQuoter from '../hooks/useQuoter';
import ErrorMsg from './ErrorMsg';

const Form = () => {

  const { data, handleChangeData, error, setError, quoteEnsurance } = useQuoter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes('')){
        setError("All fields are mandatory")
        return
    }
    setError("") 
    quoteEnsurance()
  }

  return (
    <>

    {error && <ErrorMsg />}
        <form onSubmit={handleSubmit}>
            <div className='my-5'> 
                <label 
                    className='block mb-3 font-bold text-gray-400 uppercase'
                    >Brand
                </label>

                <select
                    name='brand'
                    className='w-full p-3 bg-white border border-gray-200'
                    onChange={ e => handleChangeData(e)}
                    value={data.brand}
                >
                    <option value=""> --Select a brand-- </option>
                    {BRANDS.map( (brand) => (
                        <option 
                            key={brand.id} 
                            value={brand.id}
                        >{brand.name}
                    </option>
                    ))}
                </select>
            </div>

            <div className='my-5'> 
                <label 
                    className='block mb-3 font-bold text-gray-400 uppercase'
                    >Year
                </label>

                <select
                    name='year'
                    className='w-full p-3 bg-white border border-gray-200'
                    onChange={ e => handleChangeData(e)}
                    value={data.year}
                >
                    <option value=""> --Select a year-- </option>
                    {YEARS.map( (year) => (
                        <option 
                            key={year} 
                            value={year}
                        >{year}
                    </option>
                    ))}
                </select>
            </div>

            <div className='my-5'> 
                <label 
                    className='block mb-3 font-bold text-gray-400 uppercase'
                    >Ensurance Plan
                </label>

                <select
                    name='plan'
                    className='w-full p-3 bg-white border border-gray-200'
                    onChange={ e => handleChangeData(e)}
                    value={data.plan}
                >
                    <option value=""> --Select a plan-- </option>
                    {PLANS.map( (plan) => (
                        <option 
                            key={plan.id} 
                            value={plan.id}
                        >{plan.name}
                    </option>
                    ))}
                </select>
            </div>

            <input 
                type="submit" 
                className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                value="Quote ensurance"
                />
        </form>
    </>
  )
}

export default Form
