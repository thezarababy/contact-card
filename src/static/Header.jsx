import React from 'react'
import { Link } from 'react-router-dom'
import { Menu,House,CircleUserRound,SearchSlash } from 'lucide-react'


const Header = () => {
  return (
    <header className='flex justify-between items-center bg-gray-300 px-14 py-7 max-w[1280px] mx-auto hover:bg-blue-950'>
        <Link to='/' className='text-2xl text-blue-800 flex items-center gap-2  hover:text-white  hover:text-3xl '>Home <House /></Link>
        <Link to='/about' className='text-2xl text-blue-800 flex items-center gap-2  hover:text-white  hover:text-3xl'>About <CircleUserRound /></Link>
        <Link to='/contact' className='text-2xl text-blue-800 flex items-center gap-2  hover:text-white hover:text-3xl'>Contact <SearchSlash /></Link>
        <div>
            <Menu className='hidden ' />
        </div>
    </header>
  )
}

export default Header