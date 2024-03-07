import { Button } from '@mui/material'

const CustomButton = ({variant,text,styling,type}) => {
  return (
    <Button type={type} variant={variant} className={styling}>{text}</Button>
  )
}

export default CustomButton