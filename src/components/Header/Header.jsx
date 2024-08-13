import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import nav from '../../assets/nav.svg'
import search from '../../assets/ser.svg'
import star from '../../assets/star.svg'
import carts from '../../assets/bus.svg'
import user from '../../assets/user.svg'

const Header = () => {
    return (
        <>
            <div>
                <div className="bg-slate-100	 py-5">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <div className=''>
                                <img src={logo} alt="" />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <ul className='flex gap-8 cursor-pointer '>
                                    <Link className='hover:text-yellow-600' to={"/"}>Home</Link>
                                    <Link className='hover:text-yellow-600' to={"/About"}>Каталог</Link>
                                    <Link className='hover:text-yellow-600' to={"/Dostavka"}>Доставка</Link>
                                    <li className=' hover:text-yellow-600	'>Условия</li>
                                    <Link className='hover:text-yellow-600' to={"/Contact"}>Контакты</Link>

                                </ul>
                                <div>
                                    <input className='outline-none	px-2' type="search" placeholder='Search' />
                                </div>
                            </div>
                            <div className='flex flex-col items-end'>
                                <div className='flex gap-2'>
                                    <p className='text-xl	s'>+ 375 736 463 64 72</p>
                                    /
                                    <p className='text-xl'>+ 375 736 463 64 72</p>
                                </div>
                                <div>
                                    <span className='text-sm	text-slate-300'>Заказать звонок</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' container flex items-center justify-between'>
                    <div className='flex  items-center gap-[100px] mt-[30px]'>
                        <img src={nav} alt="" />
                        <div className='flex items-center gap-3 w-[600px]'>
                            <input className='w-full outline-none px-2' type="text" placeholder='Что желаете найти?' />
                            <img src={search} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center gap-[38px] mt-[30px] '>
                        <p className='mr-[40px] text-[rgb(255,153,0)] cursor-pointer'>Вставить список покупок</p>
                        <img src={star} alt="" />
                        <img src={carts} alt="" />
                        <img src={user} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header