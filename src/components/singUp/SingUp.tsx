import React, { FC } from 'react'
import MyButton from './../button/MyButton'
import './../singUp/singUp.css'
interface SingUpProps {
    setShowSingUp :any
}

const SingUp: FC<SingUpProps> = ({setShowSingUp}) => {
    function cancel() {
        setShowSingUp(false)
    }
    return (
        <div onClick={cancel} className='backgroundSingUp'>
            <p onClick={cancel} className='close'>X</p>
            <div onClick={(e) => e.stopPropagation()} className="containerSingUp">
                <h3>Sing Up</h3>
                <label>Name</label>
                <input type="text" placeholder='Enter Name' required/>
                <label>E-mail</label>
                <input type="email" placeholder='Enter E-mail' required />
                <label>Password</label>
                <input type="password" placeholder='Enter Password' required/>
                <label>Confirm Password</label>
                <input type="password" placeholder='Confirm Password' required/>
                <input type="checkbox" className='checkbox' required/>
                <label >I agree to the terms and conditions</label>
                <br></br>
                <MyButton className='singUp'>Sing Up</MyButton>
            </div>

        </div>
    )
}

export default SingUp