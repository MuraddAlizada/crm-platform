import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9">
        <div className="flex flex-wrap -mx-4">
          {/* Şirkət Haqqında */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-semibold mb-4">CRM Platforması</h3>
            <p className="text-gray-400">
              Əlverişli müştəri əlaqələrinin idarə edilməsi həlləri ilə
              biznesinizi gücləndirin.
            </p>
          </div>

          {/* Sürətli Bağlantılar */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Sürətli Bağlantılar</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  İdarə Paneli
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Əlaqələr
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Razılaşmalar
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Hesabatlar
                </a>
              </li>
            </ul>
          </div>

          {/* Bizimlə Əlaqə */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Bizimlə Əlaqə</h4>
            <p className="text-gray-400">
              123 CRM Küçəsi
              <br />
              100 nömrəli Ofis
              <br />
              Biznes Şəhəri, BC 12345
            </p>
            <p className="mt-4">
              <a href="mailto:support@yourcrm.com" className="hover:text-white">
                support@yourcrm.com
              </a>
            </p>
            <p className="mt-2">
              <a href="tel:+1234567890" className="hover:text-white">
                +994 99 999 99 99
              </a>
            </p>
          </div>

          {/* Sosial Mediya Bağlantıları */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-4">Bizi izəyin</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                {/* Facebook İkona */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                {/* Twitter İkona */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.73 0-4.95 2.21-4.95 4.93 0 .39.04.77.11 1.14C7.69 8.82 4.07 6.83 1.64 3.95a4.82 4.82 0 00-.66 2.48c0 1.71.87 3.22 2.19 4.11a4.42 4.42 0 01-2.24-.62v.06c0 2.38 1.7 4.36 3.95 4.8a4.6 4.6 0 01-2.23.08c.63 1.96 2.45 3.38 4.6 3.42A9.29 9.29 0 010 19.54a13.18 13.18 0 007.29 2.13c8.75 0 13.53-7.27 13.53-13.53 0-.21 0-.42-.02-.63A9.68 9.68 0 0024 4.56a9.2 9.2 0 01-2.64.73A4.52 4.52 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn İkona */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.604c0-1.337-.026-3.066-1.867-3.066-1.869 0-2.155 1.46-2.155 2.96v5.7h-3v-10h2.881v1.367h.041c.401-.756 1.38-1.55 2.839-1.55 3.038 0 3.603 2.0 3.603 4.6v5.64z" />
                </svg>
              </a>
              {/* Daha çox sosial ikona əlavə edin */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          &copy; 2024 CRM Platforması. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
