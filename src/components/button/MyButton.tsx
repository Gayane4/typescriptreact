import React, {FC} from 'react'

interface ButtonProps  {
    children: React.ReactNode
    className?:string
    onClick?:() => void
    direction?: string
}

const Button: FC<ButtonProps> = ({children,...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button