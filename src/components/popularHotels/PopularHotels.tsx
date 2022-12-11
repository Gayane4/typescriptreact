import React, { FC, useState } from 'react'
import { IHotels } from '../../types/types'
import './../popularHotels/popularHotels.css'
import Hotel from '../hotel/Hotel'
import MyButton from './../button/MyButton'

interface PopularHotelsProps {
    hotels: IHotels[]
}
const PopularHotels: FC<PopularHotelsProps> = ({ hotels }) => {
    // const slide = useRef<HTMLInputElement>(null)
    const [current, setCurrent] = useState(0)

    function prevHandler() {
        current === 0 ? setCurrent(-100 * (hotels.length - 1)) : setCurrent(current + 100)
    }

    function nextHandler() {
        current === -100 * (hotels.length - 1) ? setCurrent(0) : setCurrent(current - 100)

    }
    console.log(current);

    return (
        <div className='container'>
            <div className="title">
                <h2>Popular Hotels</h2>
                <div className="btnSlides">
                    <MyButton className='btnShowHotels'>Show More Hotels</MyButton>
                    <MyButton className='btnSlide' onClick={prevHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></MyButton>
                    <MyButton className='btnSlide' onClick={nextHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></MyButton>
                </div>
            </div>
            <div className="hotels">
                <div className="hotelItems" >
                    {hotels.map((hotel, index) => {
                        return (
                            <div  className='slide' style={{transform:`translateX(${current}%)`}} >
                                <Hotel key={index} hotel={hotel} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PopularHotels