import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import i18n from '../i18n/translations';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };
  return (
    <header className="fixed top-0 w-full bg-[#5855E7] z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src="/img/logo.png" alt="Logo" className="w-[156px] h-[100px]" />
          <ul className="hidden md:flex gap-8 text-white">
            <li><a href="#about" className="hover:text-gray-300">{t("li1")}</a></li>
            <li><a href="#services" className="hover:text-gray-300">{t("li2")}</a></li>
            <li><a href="#portfolio" className="hover:text-gray-300">{t("li3")}</a></li>
            <li><a href="#contact" className="hover:text-gray-300">{t("li4")}</a></li>
          </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-1 bg-white text-black hover:bg-blue-300 hover:text-white rounded">
            {t("button")}
          </button>
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="px-2 py-1 bg-white rounded hover:bg-blue-300 hover:text-white">
             {t("language")}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow text-black">
                <button onClick={() => handleLangChange('uz')} className="block w-full px-4 py-1 hover:bg-blue-300">UZ</button>
                <button onClick={() => handleLangChange('ru')} className="block w-full px-4 py-1 hover:bg-blue-300">RU</button>
                <button onClick={() => handleLangChange('en')} className="block w-full px-4 py-1 hover:bg-blue-300">EN</button>
              </div>
            )}
          </div>
        </div>
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
      </nav>
      {menuOpen && (
          <div className="md:hidden bg-[#5855E7] text-white px-4 pb-4 space-y-2">
            <a href="#Онас" className="block">{t("li1")}</a>
            <a href="#преимущества" className="block">{t("li2")}</a>
            <a href="#Классы" className="block">{t("li3")}</a>
            <a href="#contact" className="block">{t("li4")}</a>
          </div>
        )}

    </header>
  );
}

export default Header;
