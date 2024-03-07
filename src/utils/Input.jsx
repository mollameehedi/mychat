import { TextField } from '@mui/material'
import React from 'react'


const Input = ({variant,labeltext,style,type,name,onChange}) => {
  return (
    <TextField onChange={onChange} type={type} name={name} label={labeltext} variant={variant} className={style}/>
  )
}

export default Input