import React from 'react'
import { useTranslation } from 'react-i18next';


function Seciton() {
     const { t } = useTranslation();
  return (
    <div id='Онас' className='flex mx-auto max-w-[1164px] mt-48 flex-wrap p-4'>
    <div className='basis-1/2'>
        <img src="/img/school.png" alt="school" className='w-full h-auto'  />
    </div>
    <div className='basis-1/2 pl-6'>
        <h3 className="text-[40px] leading-[100%] font-bold font-[Gilroy] pb-8">{t("seciton")}</h3>
        <p  className="text-[24px] leading-[100%] font-normal font-[Gilroy] pt-[80px]">{t("seciton2")}</p>
        <p  className="text-[18px] leading-[100%] font-normal font-[Gilroy] pt-[85px]">{t("seciton3")}</p>
    </div>
    </div>
  )
}

export default Seciton