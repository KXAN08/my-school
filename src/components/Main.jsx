import React from 'react';
import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="w-full py-16 text-white text-center">
        <div className="container mx-auto px-4">    
        <div>
          <h2 className="text-7xl font-bold pt-10 text-gray-300">{t("main1")}</h2>
          <h2 className="text-3xl font-bold mb-12 text-black">{t("main1")}</h2>
        </div>
          <div className="flex justify-center gap-28 flex-wrap mb-12">
            <div className="w-60 flex flex-col items-center bg-[#5855E7] p-4 rounded-lg">
              <div className="w-full h-[180px] rounded-[20px] overflow-hidden bg-white">
                <img src="img/main1.png" alt="main1" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg font-semibold mt-4">{t("main2")}</p>
              <p className="text-sm mt-1">{t("main3")}</p>
              <button className="mt-4 w-full bg-white text-[#5855E7] px-4 py-2 rounded hover:bg-[#FF6B6B] hover:text-white transition">
                {t("mainbtn")}
              </button>
            </div>
            <div className="w-60 flex flex-col items-center bg-[#5855E7] p-4 rounded-lg">
              <div className="w-full h-[180px] rounded-[20px] overflow-hidden bg-white">
                <img src="img/main2.png" alt="main2" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg font-semibold mt-4">{t("main4")}</p>
              <p className="text-sm mt-1">{t("main5")}</p>
              <button className="mt-4 w-full bg-white text-[#5855E7] px-4 py-2 rounded hover:bg-[#FF6B6B] hover:text-white transition">
                {t("mainbtn")}
              </button>
            </div>
            <div className="w-60 flex flex-col items-center bg-[#5855E7] p-4 rounded-lg">
              <div className="w-full h-[180px] rounded-[20px] overflow-hidden bg-white">
                <img src="img/main3.png" alt="main3" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg font-semibold mt-4">{t("main6")}</p>
              <p className="text-sm mt-1">{t("main7")}</p>
              <button className="mt-4 w-full bg-white text-[#5855E7] px-4 py-2 rounded hover:bg-[#FF6B6B] hover:text-white transition">
                {t("mainbtn")}
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-24 flex-wrap">
            <div className="w-60 flex flex-col items-center bg-[#5855E7] p-4 rounded-lg">
              <div className="w-full h-[180px] rounded-[20px] overflow-hidden bg-white">
                <img src="img/main4.png" alt="main4" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg font-semibold mt-4">{t("main8")}</p>
              <p className="text-sm mt-1">{t("main9")}</p>
              <button className="mt-4 w-full bg-white text-[#5855E7] px-4 py-2 rounded hover:bg-[#FF6B6B] hover:text-white transition">
                {t("mainbtn")}
              </button>
            </div>
            <div className="w-60 flex flex-col items-center bg-[#5855E7] p-4 rounded-lg">
              <div className="w-full h-[180px] rounded-[20px] overflow-hidden bg-white">
                <img src="img/main5.png" alt="main5" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg font-semibold mt-4">{t("main10")}</p>
              <p className="text-sm mt-1">{t("main11")}</p>
              <button className="mt-4 w-full bg-white text-[#5855E7] px-4 py-2 rounded hover:bg-[#FF6B6B] hover:text-white transition">
                {t("mainbtn")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;


