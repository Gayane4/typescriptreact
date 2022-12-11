import React from 'react'

interface MyInputProps {
    onChange?: () => void
    placeholder?: string
    value?: string
}
const MyInput = ({ ...props }) => {
    return (
        <input {...props} />
    )
}

export default MyInput