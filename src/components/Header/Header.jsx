import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.svg";



const API_URL = "https://dummyjson.com";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`${API_URL}/products/search`, {
            params: { q: searchTerm },
          });
          setSuggestions(response.data.products);
        } catch (error) {
          console.error("Failed to fetch suggestions:", error);
        }
      };

      const debounce = setTimeout(fetchSuggestions, 300);

      return () => clearTimeout(debounce);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="bg-slate-100 py-5">
        <div className="container mx-auto">
          <div className="flex md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <img src={logo} alt="Logo" />
            </div>
            <div className="relative">
              <input
                placeholder="Nimani qidiryapsiz?"
                className="border-none px-2 mr-2 outline-none"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 w-full mt-2 z-10">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="cursor-pointer hover:bg-gray-200 p-2"
                    >
                      {suggestion.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="hidden md:flex">
              <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Link className="hover:text-yellow-600" to={"/"}>
                  Home
                </Link>
                <Link className="hover:text-yellow-600" to={"/About"}>
                  Каталог
                </Link>
                <Link className="hover:text-yellow-600" to={"/Dostavka"}>
                  Доставка
                </Link>
                <li className=" hover:text-yellow-600	">Условия</li>
                <Link className="hover:text-yellow-600" to={"/Contact"}>
                  Контакты
                </Link>
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex gap-2">
                <p className="text-xl">+ 375 736 463 64 72</p>
                <p className="text-xl ml-3 text-gray-500">/</p>
                <p className="text-xl">+ 375 736 463 64 72</p>
              </div>
              <div>
                <span className="text-sm text-slate-300">Заказать звонок</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
