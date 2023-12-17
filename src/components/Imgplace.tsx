import React from 'react'
import "../styles/Imgplace.css"
export const Imgplace = ({image}:{image:string}) => {
  return (
    <div className='imageContainer'>
      <img src={image} className="image" alt="" />
    </div>
  )
}
