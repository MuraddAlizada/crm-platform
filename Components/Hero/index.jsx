import React from "react";
import { useCallback } from "react";
function Hero() {
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
    <section className="bg-gradient-to-r from-blue-400 to-indigo-700 mb-10 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-gilroy">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Mətn Bölməsi */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Müştərilərlə Əlaqələrinizi Gücləndirin
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              CRM Platformamızla biznesinizi irəli aparın. Effektiv idarəetmə,
              əla müştəri xidməti və artırılmış satışlar üçün bütün vasitələr
              burada.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#crm-table"
                onClick={(e) => handleScroll(e, "crm-table")}
                className="bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300"
              >
                Başlamaq
              </a>
              <a
                href="#crm-table"
                onClick={(e) => handleScroll(e, "crm-table")}
                className="ml-4 bg-transparent border border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-indigo-600 transition duration-300"
              >
                Ətraflı Öyrən
              </a>
            </div>
          </div>

          {/* Görüntü Bölməsi */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="CRM Platform Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
