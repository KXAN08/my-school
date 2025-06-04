import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAFA] pt-[143px] h-auto pb-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-[40px] leading-[100%] font-bold font-[Gilroy] pb-8">
            <span className="text-[#5855E7]">{t("hero1")}</span> {t("heroh2")}
          </h2>
          <p className="text-[18px] leading-[100%] font-normal font-[Gilroy] pb-8">
            {t("herop")}
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="w-48 h-10 rounded-[10px] text-[18px] font-normal font-[Gilroy] border border-[#6347EB] bg-[#6347EB] text-white hover:bg-white hover:text-black transition">
              {t("herobtn")}
            </button>
            <button className="w-48 h-10 rounded-[10px] text-[18px] font-normal font-[Gilroy] border border-[#6347EB] bg-white text-black hover:bg-[#6347EB] hover:text-white transition">
              {t("herobtn2")}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 overflow-hidden rounded-bl-full">
          <img  src="/img/hero.png" alt="uchenika" className="w-full h-auto object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
