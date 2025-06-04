import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-indigo-600 text-white p-10 rounded-xl shadow-lg w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      
     
      <div>
        <h2 className="text-2xl font-bold mb-4">{t('contacts')}</h2>
            <p>  <span className='w-[20px] bg-[#A23AC1] h-[20px]'></span> {t('address')}</p>
        <div className="mt-4 flex flex-col gap-1">
          <p className="flex items-center gap-2">
            <span className='w-[20px] bg-[#A23AC1] h-[20px]'></span> +998970020771
          </p>
          <p className="flex items-center gap-2">
            <span className='w-[20px] bg-[#A23AC1] h-[20px]'></span> +998971970771 (Dush–Juma, 09:00–17:00)
          </p>
        </div>
        <img
          src="/img/school.png" alt="school" className="mt-5 rounded shadow-lg"/>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{t('leave_request')}</h2>
        <p className="mb-4 text-sm">{t('discount_note')}</p>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder={t('first_name')}
            className="p-2 rounded text-black bg-white" />
          <input
            type="text"
            placeholder={t('last_name')}
            className="p-2 rounded text-black bg-white" />
          <textarea
            placeholder={t('number')}
            className="p-2 rounded text-black bg-white h-[260px]"
            rows="3" ></textarea>
          <button
            type="submit"
            className="mt-3 bg-white text-indigo-600 font-semibold py-2 rounded hover:bg-gray-200">
            {t('send')} 
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactForm;
