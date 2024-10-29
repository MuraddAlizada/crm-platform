import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddUserModal({ isOpen, onClose, onAddUser }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  // Regex patterns for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+]+$/;

  const handleAddUser = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Ad Soyad tələb olunur";
    if (!email || !emailPattern.test(email))
      newErrors.email = "Doğru email formatı daxil edin";
    if (!number || !phonePattern.test(number))
      newErrors.number = "Yalnız nömrə istifadə olunmalıdır";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Zəhmət olmasa bütün sahələri düzgün doldurun");
      return;
    }

    // If no errors, proceed to add user
    setIsAdding(true);
    setTimeout(() => {
      const [first_name, ...rest] = fullName.trim().split(" ");
      const last_name = rest.join(" ") || "";
      const newUser = {
        id: Date.now(), // Unique ID
        first_name,
        last_name,
        email,
        mobile: number,
        date_of_join: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
      };
      onAddUser(newUser);
      toast.success("İstifadəçi uğurla əlavə olundu!");
      setIsAdding(false);
      onClose();
    }, 2000);
  };

  // Handle click outside of the modal content
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      onClose();
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, fullName, email, number]);

  if (!isOpen) return null;

  return (
    <>
      <div
        id="modal-container"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={handleOutsideClick}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
          <h2 className="text-lg font-bold mb-4">Yeni İstifadəçi Əlavə Et</h2>
          <div className="mb-4">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Ad Soyad"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setErrors((prev) => ({ ...prev, fullName: "" }));
                }}
                className={`w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:bg-gray-100 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
                aria-label="Full Name"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}
            </div>
            <div className="mb-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:bg-gray-100 ${
                  errors.email ? "border-red-500" : ""
                }`}
                aria-label="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Nömrə"
                value={number}
                onChange={(e) => {
                  const formattedValue = e.target.value.replace(/\s+/g, "");
                  if (
                    formattedValue === "" ||
                    phonePattern.test(formattedValue)
                  ) {
                    setNumber(formattedValue);
                    setErrors((prev) => ({ ...prev, number: "" }));
                  }
                }}
                className={`w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:bg-gray-100 ${
                  errors.number ? "border-red-500" : ""
                }`}
                aria-label="Number"
              />
              {errors.number && (
                <span className="text-red-500 text-sm">{errors.number}</span>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400 transition-colors"
            >
              İmtina
            </button>
            <button
              onClick={handleAddUser}
              disabled={isAdding}
              className="px-4 py-2 rounded-lg text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center justify-center"
            >
              {isAdding ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Gözləyin
                </>
              ) : (
                "Əlavə Et"
              )}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default AddUserModal;
