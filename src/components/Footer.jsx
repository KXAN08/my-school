import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';


function Footer() {
      const { t } = useTranslation();

  return (
     <footer className=' w-full bg-[#5855E7] mt-40'>
        <div className='flex justify-around items-center text-white container mx-auto'>
             <img src="/img/logo.png" alt="Logo" className="w-[126px] h-[90px]" />
          <div className='flex items-center'>
          <h3 className="text-2xl font-bold mb-4">{t('contacts')}</h3>
            <div>
          <p className="flex items-center gap-2">+998970020771 </p>
          <p className="flex items-center gap-2 pt-6"> +998971970771 (Dush–Juma, 09:00–17:00) </p>
            </div>
          </div>

       <div>
        <p className='text-1xl font-bold mb-2'>{t("footer")}</p>
             <div className="flex justify-center gap-4 mt-8 text-2xl text-white">
            <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="hover:text-[#0088cc] transition" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-[#E1306C] transition" />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-[#1877F2] transition" />
            </a>
            </div>
       </div>
            
        </div>
     </footer>
  )
}

export default Footer