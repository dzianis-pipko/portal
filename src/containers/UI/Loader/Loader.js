import React from 'react'
import './Loader.css'

const Loader = () => {
   return (
      <div className="loader-wrapper">
         <div class="lds-ripple">
            <div />
            <div />
         </div>
      </div>
   )
}

export default Loader