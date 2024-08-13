import React from 'react'
import rasm1 from '../../assets/rasm1.png'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.png'
import rasm4 from '../../assets/rasm4.png'
import rasm5 from '../../assets/rasm5.png'
import rasm6 from '../../assets/rasm6.png'
import rasm7 from '../../assets/rasm7.png'
import rasm8 from '../../assets/rasm8.png'
import rasm9 from '../../assets/rasm9.png'
import rasm10 from '../../assets/rasm10.png'

const data = [
    {
        id: 1,
        url: rasm1,
        title: "Диваны",
    },
    {
        id: 2,
        url: rasm2,
        title: "Спальная",
    },
    {
        id: 13,
        url: rasm3,
        title: "Кухня",
    },
    {
        id: 4,
        url: rasm4,
        title: "Для сада",
    },
    {
        id: 5,
        url: rasm5,
        title: "Мебель",
    },
    {
        id: 6,
        url: rasm6,
        title: "Гигиена",
    },
    {
        id: 7,
        url: rasm10,
        title: "Товары для отдыха",
    },
    {
        id: 8,
        url: rasm7,
        title: "Зеркала",
    },
    {
        id: 9,
        url: rasm1,
        title: "шкаф",
    },
    {
        id: 10,
        url: rasm9,
        title: "Кухня и бытовая тех..",
    }

]


const laylo = data?.map((el) => (
    <div key={el.id} className="hover:delay-150	 hover:shadow-lg   cursor-pointer  w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%] flex gap-[10px] py-3 flex-col items-center">
        <div className=''>
            <img src={el.url} alt="" />
        </div>
        <p className='text-[18px] font-bold'>{el.title}</p>
    </div>
))



const Categoty = () => {
    return (
        <div>
            <div className="container">
                <div className='flex  items-end mb-8'>
                    <h2 className='font-extrabold text-4xl'>Популярные категории</h2>
                    <p className=''>Все категории -</p>
                </div>
                <div className='flex flex-wrap gap-[18.7px] justify-between mt-[61px] mb-[100px]'>{laylo}</div>
            </div>

        </div>
    )
}

export default Categoty