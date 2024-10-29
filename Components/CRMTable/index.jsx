import { useState, useRef, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5"; // Filter icon
import ReactPaginate from "react-paginate";

import { FiRefreshCcw } from "react-icons/fi";
const CRMTable = ({ users, onDeleteUser }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [openFilter, setOpenFilter] = useState(null); // Open filter dropdown
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
  });

  const dropdownRef = useRef(null);

  // Handle checkbox selection
  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteUser = (id) => {
    onDeleteUser(id);
  };
  // Handle filter change
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    setCurrentPage(0); // Reset to first page on filter change
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setFilters({
      name: "",
      email: "",
      mobile: "",
      date: "",
    });
  };

  // Filter data
  const filteredData = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const nameMatch = fullName.includes(filters.name.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .includes(filters.email.toLowerCase());
    const mobileMatch = user.mobile?.includes(filters.mobile);
    const dateMatch = user.date_of_join?.includes(filters.date);
    return nameMatch && emailMatch && mobileMatch && dateMatch;
  });

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const paginatedData = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenFilter(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container  mx-auto w-full  p-4 font-gilroy border border-borderTableCel rounded bg-white">
      <div className="w-full min-h-[400px] flex flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse border-borderTableCel">
            <thead className="bg-gray-100 border-b border-borderTableCel">
              <tr>
                <th className="w-16 px-4 py-2">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelectedRows(
                        e.target.checked ? data.map((row) => row.id) : []
                      )
                    }
                  />
                </th>
                {/* Name Column with Filter */}
                <th className="w-1/4 px-4 py-3 text-left relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      setOpenFilter(openFilter === "name" ? null : "name")
                    }
                  >
                    Ad Soyad
                    <IoFunnelOutline />
                  </div>
                  {openFilter === "name" && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-white border rounded shadow-md mt-2 p-2 z-50"
                    >
                      <input
                        type="text"
                        placeholder="Ad axtar"
                        value={filters.name}
                        onChange={(e) =>
                          handleFilterChange("name", e.target.value)
                        }
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  )}
                </th>
                {/* Email Column with Filter */}
                <th className="w-1/4 px-4 py-3 text-left relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      setOpenFilter(openFilter === "email" ? null : "email")
                    }
                  >
                    Elektron Poçt Ünvanı
                    <IoFunnelOutline />
                  </div>
                  {openFilter === "email" && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-white border rounded shadow-md mt-2 p-2 z-50"
                    >
                      <input
                        type="text"
                        placeholder="Email axtar"
                        value={filters.email}
                        onChange={(e) =>
                          handleFilterChange("email", e.target.value)
                        }
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  )}
                </th>
                {/* Mobile Column with Filter */}
                <th className="w-1/6 px-4 py-3 text-left relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      setOpenFilter(openFilter === "mobile" ? null : "mobile")
                    }
                  >
                    Mobil Nömrə
                    <IoFunnelOutline />
                  </div>
                  {openFilter === "mobile" && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-white border rounded shadow-md mt-2 p-2 z-50"
                    >
                      <input
                        type="text"
                        placeholder="Mobil nömrə axtar"
                        value={filters.mobile}
                        onChange={(e) =>
                          handleFilterChange("mobile", e.target.value)
                        }
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  )}
                </th>
                {/* Date Column with Filter */}
                <th className="w-1/6 px-4 py-3 text-left relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      setOpenFilter(openFilter === "date" ? null : "date")
                    }
                  >
                    Qatılma Tarixi
                    <IoFunnelOutline />
                  </div>
                  {openFilter === "date" && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-white border rounded shadow-md mt-2 p-2 z-50"
                    >
                      <input
                        type="text"
                        placeholder="Tarix axtar"
                        value={filters.date}
                        onChange={(e) =>
                          handleFilterChange("date", e.target.value)
                        }
                        className="border rounded px-2 py-1 w-full"
                      />
                    </div>
                  )}
                </th>
                <th className="w-12 px-2 py-2 text-left">
                  <div className="relative group flex justify-center">
                    <button
                      onClick={handleResetFilters}
                      className="text-blue-500 focus:outline-none"
                    >
                      <FiRefreshCcw />
                    </button>
                    {/* Tooltip */}
                    <span className="absolute z-50 top-full mt-2 hidden group-hover:block bg-gray-300 border text-gray-700 text-sm rounded py-1 px-2 whitespace-nowrap">
                      Yeniləyin
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100 border-b">
                    <td className="w-16 px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(user.id)}
                        onChange={() => handleCheckboxChange(user.id)}
                      />
                    </td>
                    <td className="w-1/4 px-4 py-3">
                      {`${user.first_name} ${user.last_name}`}
                    </td>
                    <td className="w-1/4 px-4 py-3">{user.email}</td>
                    <td className="w-1/6 px-4 py-3">{user.mobile}</td>
                    <td className="w-1/6 px-4 py-3">{user.date_of_join}</td>
                    <td className="w-12 px-2 py-2 text-center">
                      {/* This cell can remain empty or contain additional actions */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-20 text-center text-gray-500">
                    Məlumat tapılmadı
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex  flex-col lg:flex-row justify-between items-center mt-5 pb-5">
          {/* Items Per Page Selector */}
          <div className="flex items-center space-x-2">
            <label htmlFor="itemsPerPage" className="mr-2">
              Səhifə başına element:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="border rounded px-2 py-1 bg-white font-gilroy"
            >
              {[15, 10, 5].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <div>
            {" "}
            {pageCount > 1 && (
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="flex justify-center items-center gap-2 w-full"
                pageLinkClassName="bg-gray-200 px-3 py-1 rounded-md"
                activeLinkClassName="bg-blue-500 text-white"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMTable;
