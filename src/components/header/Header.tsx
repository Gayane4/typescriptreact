import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.svg'
import background from './../../assets/images/background.avif'
import MyButton from './../button/MyButton'
import SingUp from '../singUp/SingUp'

interface HeaderProps{

}

const Header: FC<HeaderProps> = () => {
  const [showSingUp,setShowSingUp] = useState<boolean>(false)

  return (
    <div className='header'>
      <div className="headerLeft">
      <nav>
        <ul className='menuList'>
        <Link to="/" className='homePage'><img src={logo} alt="logo" className='logo' />Treact</Link>
        <Link to="/about" className='menuPages'>About</Link>
        <Link to="/blog" className='menuPages'>Blog</Link>
        <Link to="/pricing" className='menuPages'>Pricing</Link>
        <Link to="/login" className='menuPages'>Login</Link>  
        </ul>
      </nav>
      <div className='headerLeftText'>
        <h1>Find Perfect Hotels <span>anywhere you go.</span></h1>
        <p>We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.</p>
        <MyButton className ="btnHeader btnSingUp" onClick={() => setShowSingUp(true)}>Sign Up</MyButton>
        <MyButton className='btnHeader btnSearch'>Search Hotels</MyButton>
      </div>
      </div>
      <div className='headerRight'>
      <img src={background} alt="" />
      </div>
      {showSingUp ? <SingUp setShowSingUp={setShowSingUp}/> : showSingUp}
    </div>

  )
}

export default Header