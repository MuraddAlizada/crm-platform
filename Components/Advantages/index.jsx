import React from "react";
import {
  FaUserFriends,
  FaHeadset,
  FaChartLine,
  FaCloud,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";

function Advantages() {
  const advantages = [
    {
      icon: <FaUserFriends className="h-12 w-12 text-indigo-600" />,
      title: "Asan İstifadə",
      description:
        "Sadə və intuitiv interfeysimizlə CRM platformamızı asanlıqla öyrənə və istifadə edə bilərsiniz.",
    },
    {
      icon: <FaHeadset className="h-12 w-12 text-green-600" />,
      title: "Müştəri Dəstəyi",
      description:
        "24/7 müştəri dəstəyi ilə hər hansı bir problemlə qarşılaşdığınızda dərhal yardım əldə edin.",
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-yellow-600" />,
      title: "Güclü Analitika",
      description:
        "Satışlarınızı və müştəri davranışlarını izləmək üçün geniş analitik alətlərdən istifadə edin.",
    },
    {
      icon: <FaCloud className="h-12 w-12 text-red-600" />,
      title: "İnteqrasiya",
      description:
        "Ən populyar biznes alətəri ilə asan inteqrasiya edərək iş axışınızı optimallaşdırın.",
    },
    {
      icon: <FaLock className="h-12 w-12 text-purple-600" />,
      title: "Əlçatanlıq",
      description:
        "İstifadəçilərinizin hər hansı bir vaxtda və yerdə CRM sisteminə rahat daxil olması təmin edilir.",
    },
    {
      icon: <FaMobileAlt className="h-12 w-12 text-blue-600" />,
      title: "Mobil Dəstək",
      description:
        "Mobil cihazlar üçün optimallaşdırılmış interfeysimizlə hər zaman əlaqədə olun.",
    },
  ];

  return (
    <section className="bg-white py-16 font-gilroy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Niyə Bizim CRM Platformamıza Qatılmalısınız?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Bizim CRM platformamızın sizə necə kömək edə biləcəyini kəşf edin.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="bg-indigo-100 rounded-full p-5 mb-4">
                {advantage.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {advantage.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
