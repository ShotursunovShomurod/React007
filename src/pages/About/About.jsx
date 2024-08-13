import React from "react";
import rasm001 from "../../assets/Rectangle 66.png";
import rasm002 from "../../assets/Rectangle 68.png";
import humburger from "../../assets/Group 5.png";
import Star from "../../assets/star.svg";
import user from "../../assets/user.svg";
import search from "../../assets/ser.svg";
import card from "../../assets/Union.png";
const list = [
  {
    id: 1,
    url: rasm001,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 2,
    url: rasm002,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 3,
    url: rasm001,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Системы для хранения",
    collection1: "Шкафы и шкафы-купе",
    price: "Больше",
  },
  {
    id: 4,
    url: rasm002,
    them: "Аксессуары",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 5,
    url: rasm001,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 6,
    url: rasm002,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 7,
    url: rasm001,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 8,
    url: rasm002,
    them: "Аксессуары",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
];
const Mebels = () => {
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
            <button className="bg-inherit text-white">
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
        <p className="text-[36px] text font-[700] mt-[-100px] mb-6">Каталог</p>
        <div className="grid gap-[53px] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 items-center justify-center ">
          {list?.map((el) => (
            <div key={el.id}>
              <div className="mb-[19px]">
                <img
                  className=" duration-300 hover:scale-105 "
                  src={el.url}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] flex flex-col gap-[30px] pl-5">
                <p className="text-[18px] font-[700]">{el.them}</p>
                <p>{el.title}</p>
                <p className="max-w-[200px]">{el.desc}</p>
                <p>{el.info}</p>
                <p>{el.collection}</p>
                <p>{el.collection1}</p>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mebels;
