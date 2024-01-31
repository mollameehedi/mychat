import React from 'react'

const Image = ({src,alt,stlye}) => {
  return (
    <img src={src} alt={alt}  className={stlye}/>
  )
}

export default Image