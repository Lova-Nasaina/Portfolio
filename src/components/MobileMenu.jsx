import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    const { t, i18n } = useTranslation();

    const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
  ];

    return ( 
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out 
                        ${
                            menuOpen 
                                ? "h-screen opacity-100 pointer-events-auto" 
                                : "h-0 opacity-0 pointer-events-none"
                            }
                        `}
        >

        <button onClick={() => setMenuOpen(false)} 
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
        >
            &times;
        </button>

        <a href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        >       
            {t('home')}
        </a>
        <a href="#about" 
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        >       
            {t('About')}
        </a>
        <a href="#project" 
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        >       
            {t('Project')}
        </a>
        <a href="#contact" 
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        >       
            {t('Contact')}
        </a>

      <div 
        className={`mt-12 p-1 bg-white/5 border border-white/10 rounded-2xl flex items-center transition-all duration-500 delay-200
            ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {languages.map((lang) => {
          const active = i18n.language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setMenuOpen(false); 
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                active
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {active && <Check size={14} />}
            </button>
          );
        })}
      </div>
        </div>
     );
}