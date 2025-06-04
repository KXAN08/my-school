import React from 'react';
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t } = useTranslation();

  return (
    <section id='преимущества' className="w-full bg-[#5855E7] py-16 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">{t("menu1")}</h2>

        <div className="flex justify-center gap-30 flex-wrap mb-12">
          <div className="w-60 flex flex-col items-center">
            <div className="w-[180px] h-[180px] rounded-full border-4 border-white hover:border-[#FF6B6B] transition flex items-center justify-center overflow-hidden bg-white group">
              <img src="img/menu1.png" alt="menu" className="w-[95%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold mt-4">{t("menu2")}</p>
            <p className="text-sm mt-1">{t("menu3")}</p>
          </div>

          <div className="w-60 flex flex-col items-center">
            <div className="w-[180px] h-[180px] rounded-full border-4 border-white hover:border-[#FF6B6B] transition flex items-center justify-center overflow-hidden bg-white group">
              <img src="img/menu2.png" alt="menu" className="w-[95%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold mt-4">{t("menu4")}</p>
            <p className="text-sm mt-1">{t("menu5")}</p>
          </div>

          <div className="w-60 flex flex-col items-center">
            <div className="w-[180px] h-[180px] rounded-full border-4 border-white hover:border-[#FF6B6B] transition flex items-center justify-center overflow-hidden bg-white group">
              <img src="img/menu3.png" alt="menu" className="w-[95%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold mt-4">{t("menu6")}</p>
            <p className="text-sm mt-1">{t("menu7")}</p>
          </div>
        </div>

        <div className="flex justify-center gap-30 flex-wrap">
          <div className="w-60 flex flex-col items-center">
            <div className="w-[180px] h-[180px] rounded-full border-4 border-white hover:border-[#FF6B6B] transition flex items-center justify-center overflow-hidden bg-white group">
              <img src="img/menu4.png" alt="menu" className="w-[100%] h-[100%] object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold mt-4">{t("menu8")}</p>
            <p className="text-sm mt-1">{t("menu9")}</p>
          </div>

          <div className="w-60 flex flex-col items-center">
            <div className="w-[180px] h-[180px] rounded-full border-4 border-white hover:border-[#FF6B6B] transition flex items-center justify-center overflow-hidden bg-white group">
              <img src="img/menu5.png" alt="menu" className="w-[100%] h-[100%] object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold mt-4">{t("menu10")}</p>
            <p className="text-sm mt-1">{t("menu11")}</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Menu;
