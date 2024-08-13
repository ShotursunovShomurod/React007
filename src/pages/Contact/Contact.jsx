import React from 'react'
import boy from '../../assets/boy.png'
import w from '../../assets/w.png'
import f from '../../assets/f.png'
import g from '../../assets/gg.png'


const Contact = () => {
  return (
    <>
        <div className='container flex items-center justify-between'>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <b className='text-[36px] font-sans'>Контакты</b>
                </div>
                <div className='flex gap-[56px] items-center justify-center'>
                    <ul className='flex flex-col gap-[10px] font-[500]'>
                        <li>+ 375 434 847 28 84</li>
                        <li>+ 375 448 473 09 48</li>
                        <li>
                            <u>ikeaekspress@gmail.com</u>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-[10px] font-[500]'>
                        <li>г.Минск</li>
                        <li>Ул. Первомайская</li>
                        <li>Д. 1, Кв. 43</li>
                    </ul>
                    <ul className='flex flex-col gap-[10px] font-[500]'>
                        <li>ОГРН: 3748 49384 4847 30948</li>
                        <li>ООО “Икеа”</li>
                        <li>
                            <u>Политика конфиденциальности</u>
                        </li>
                    </ul>
                </div>
                <div className='flex gap-[75px]'>
                    <img src={w} alt="" />
                    <img src={f} alt="" />
                    <img src={g} alt="" />
                </div>
            </div>
            <div>
                <img src={boy} alt="" />
            </div>
        </div>
    </>
  )
}

export default Contact