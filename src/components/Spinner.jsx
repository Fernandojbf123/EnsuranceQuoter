import React from 'react'
import "../styles/Spinner.css"

const Spinner = () => {
  return (

  <div className='spinner mt-10 flex justify-center'>
      <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
      </div>
    </div>
  )
}

export default Spinner
