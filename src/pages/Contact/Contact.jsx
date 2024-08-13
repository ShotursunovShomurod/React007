import React from "react";
import kontact from "../../assets/boy.png";
import { FaWeebly } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import humburger from "../../assets/Group 5.png";
import Star from "../../assets/star.svg";
import user from "../../assets/user.svg";
import search from "../../assets/ser.svg";
import card from "../../assets/Union.png";

const Contact = () => {
  return (
    <>
      <div className=" container mx-auto mb-[120px] flex items-center justify-between">
        <div className="flex  items-center gap-[100px] mt-[30px]">
          <img src={humburger} alt="" />
          <div className="flex items-center border rounded-[30px] p-2 w-[600px]">
            <input
              className="bg-inherit w-full outline-none px-2"
              type="text"
              placeholder="Что желаете найти?"
            />
            <button className="bg-inheri">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-[38px] mt-[30px] ">
          <p className="mr-[40px] text-[rgb(255,153,0)] cursor-pointer">
            Вставить список покупок
          </p>
          <img src={Star} alt="" />
          <img src={card} alt="" />
          <img src={user} alt="" />
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-[36px] text font-[700] mt-[-100px] mb-11">
          Контакты
        </p>
        <div className="flex items-center justify-center">
          <div className="">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
              <div>
                <p>+ 375 434 847 28 84</p>
                <p>+ 375 448 473 09 48</p>
                <p>ikeaekspress@gmail.com</p>
              </div>
              <div>
                <p>г.Минск</p>
                <p>Ул. Первомайская</p>
                <p>Д. 1, Кв. 43</p>
              </div>
              <div>
                <p>ОГРН: 3748 49384 4847 30948</p>
                <p>ООО “Икеа”</p>
                <p>Политика конфиденциальности</p>
              </div>
            </div>
            <div className="flex gap-36 text-[#7d7d7d] mt-9 ml-3">
              <FaWeebly className="text-[44px] cursor-pointer" />
              <FaFacebookF className="text-[44px] cursor-pointer" />
              <IoLogoGoogleplus className="text-[44px] cursor-pointer" />
            </div>
          </div>
          <div className=" mt-[-120px] w-[450px] ml-20 sm:flex-none sm:mt-0 md:mt-[0]">
            <img className="" src={kontact} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
