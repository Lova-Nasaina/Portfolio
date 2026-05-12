import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import { Globe } from "lucide-react";
import { ChevronDown, Check } from "lucide-react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            NSN<span className="text-blue-500">.Profil</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              { t('home')}{" "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              {t('About')}{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              {t('Project')}{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              {t("Contact")}{" "}
            </a>

            {/* Language Select */}
            <div className="relative " ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-blue-500 px-4 py-2.5 rounded-2xl"
              >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="font-semibold text-sm">
                  {currentLanguage.label}
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <div className="absolute right-0 top-14 w-44 bg-[#0B1120] border border-white/10 rounded-2xl p-2 shadow-xl z-50">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 px-2">
                    Language
                  </p>

                  <div className="space-y-1">
                    {languages.map((lang) => {
                      const active = i18n.language === lang.code;

                      return (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center justify-between px-2 py-2 rounded-xl text-sm transition ${
                            active
                              ? "bg-gradient-to-r from-blue-800 to-cyan-400"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.label}</span>
                          </div>

                          {active && <Check size={14} />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2 h-[2px] bg-gradient-to-r from-blue-800 to-cyan-400 rounded-full" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
