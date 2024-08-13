import React from 'react'
import ins from '../../assets/ins.png'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-slate-100 py-[40px] mt-36'>
                <div className="container">
                    <div>
                        <div className=''>
                            <img src={logo} alt="" />
                        </div>
                        <div className='flex justify-between items-end mt-7'>
                            <div className='flex w-1/5'>
                                <ul className='flex flex-col gap-6'>
                                    <li className='font-bold'>Информация</li>
                                    <li>Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.</li>
                                    <li>УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299 </li>
                                    <li>Политика конфиденциальности</li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul className='flex flex-col gap-5'>
                                    <li className='font-bold'>Меню</li>
                                    <li>Главная | Каталог | Товары в наличии</li>
                                    <li>Скидки | Популярное | Вдохновение</li>
                                    <li>Доставка | Услуги | Условия</li>
                                    <li>Контакты | Вставить | Cписок покупок</li>
                                    <li>Корзина | Личный кабинет | Избранное</li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul className='flex flex-col gap-5'>
                                    <li className='font-bold'>Контакты</li>
                                    <li className=''>г.Минск</li>
                                    <li className=''>Ул. Первомайская, Д. 1, Кв. 43</li>
                                    <li className=''>+ 375 434 847 28 84</li>
                                    <li className=''>+ 375 448 473 09 48</li>
                                    <li className=''>ikeaekspress@gmail.com</li>
                                </ul>
                            </div>
                            <div className=''>
                                <img src={ins} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer