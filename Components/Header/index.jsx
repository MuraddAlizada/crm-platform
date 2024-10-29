// components/Header.jsx

import Link from "next/link";
import { useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      // Calculate the position to scroll to, accounting for the fixed header height
      const headerOffset = 80; // Adjust this value based on your header's height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <header className="bg-gray-800 bg-opacity-90 text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Sol Tərəf: Logo və Əsas Linklər */}
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <div className="text-2xl font-bold font-gilroy">
            <Link href="/">
              <p className="hover:text-gray-300 cursor-pointer">CRM Platforması</p>
            </Link>
          </div>

          {/* Naviqasiya Linkləri: Ana səhifə, Panel & Üstünlüklər */}
          <nav className="flex font-normal text-base space-x-6 font-gilroy">
            {/* Bölmələrə keçid üçün ancor linklər istifadə edin */}
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "hero")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Ana səhifə
            </a>
            <a
              href="#crm-table"
              onClick={(e) => handleScroll(e, "crm-table")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Üzvlər
            </a>
            <a
              href="#advantages"
              onClick={(e) => handleScroll(e, "advantages")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Üstünlüklər
            </a>
          </nav>
        </div>

        {/* Sağ Tərəf: Profil İkonu */}
        {/* <div className="flex items-center space-x-2">
          <Link href="/profile">
            <p className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <FaUserCircle className="mr-1 w-5 h-5" />
              Profil
            </p>
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
