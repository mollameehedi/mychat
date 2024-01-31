import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({variant,text,styling}) => {
  return (
    <Button variant={variant} className={styling}>{text}</Button>
  )
}

export default CustomButton