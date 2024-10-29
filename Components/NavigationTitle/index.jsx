import React from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

function NavigationTitle({ title, onSearchChange, onAddUser }) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4  mb-3">
      {/* Title on the left */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
        {title || "Üzvlər Siyahisi"}
      </h1>

      {/* Search input and Add New User button on the right */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Add New User Button */}
        <button
          onClick={onAddUser}
          className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition duration-200"
          aria-label="Yeni İstifadəçi Əlavə Et"
        >
          <FiPlus className="mr-2" />
          Yeni İstifadəçi Əlavə Et
        </button>
      </div>
    </div>
  );
}

export default NavigationTitle;
