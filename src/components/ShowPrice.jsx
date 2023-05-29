import { React, useCallback, useRef } from 'react'
import useQuoter from '../hooks/useQuoter'
import { BRANDS, PLANS } from '../constants'


const ShowPrice = () => {

  const {price, data} = useQuoter();
  const {brand, year, plan } = data;

  const yearRef = useRef(year);

  const [brandName] = useCallback (
    BRANDS.filter(m => m.id === Number(brand)), [price]
  )

  const [planName] = useCallback (
    PLANS.filter(p => p.id === Number(plan)), [price]
  )


//*** I'd use this instead of useCALLBACK and useRef
//   let [B, setB] = useState("");
//   let [Y, setY] = useState("");
//   let [P, setP] = useState("");
//   useEffect (() => {
//     if(price != 0){ 
//         setB(BRANDS[brand-1].name)
//         setY(year)
//         setP(PLANS[plan-1].name)
//     }
//   },[price])
// *************************

  if (price === 0) return null

  return (
    <div className='bg-gray-100 mt-5 p-5 text-center shadow'>
      <h2 className=' text-gray-600 font-black text-3xl'>Sumary</h2>
      <p className='my-2'><span className='font-bold'>Brand:</span>{` ${brandName.name}`}</p>
      <p className='my-2'><span className='font-bold'>Year:</span>{` ${yearRef.current}`}</p>
      <p className='my-2'><span className='font-bold'>Plan:</span>{` ${planName.name}`}</p>
      <p className='my-2 text-2xl'><span className='font-bold'>Ensurance price:</span>{` ${price} usd per year`}</p>
    </div>
  )
}

export default ShowPrice
