import { IHotels } from '../types/types'
import hotel1 from '@/assets/images/hotel1.avif'
import hotel2 from '@/assets/images/hotel2.avif'
import hotel3 from '@/assets/images/hotel3.avif'
import hotel4 from '@/assets/images/hotel4.avif'


export const data:IHotels[] = [
    {
        img: hotel1,
        name: "Wyatt Residency",
        popular: 4.8,
        geo: 'Rome, Italy',
        price: 'USD 39/Day',
        description: 'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: hotel2,
        name: "Soho Paradise",
        popular: 4.9,
        geo: 'Ibiza, Spain',
        price: 'USD 50/Day',
        description: 'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: hotel3,
        name: "Hotel Baja",
        popular: 5.0,
        geo: 'Palo Alto, CA',
        price: 'USD 19/Day',
        description: 'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: hotel4,
        name: "Hudak Homes",
        popular: 4.5,
        geo: 'Arizona, RAK',
        price: 'USD 99/Day',
        description: 'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
    }
    



]