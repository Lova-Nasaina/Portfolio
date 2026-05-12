import { RevealOnScroll } from "../RevealOnScroll";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Accueil | Nasaina Lova - Développeur Fullstack</title>
        <meta
          name="description"
          content="Découvrez mes réalisations web et mes projets fullstack en React, Laravel et Data Science."
        />
      </Helmet>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_center,_#051c5cc0_0%,_#020203_50%,_#0a0a0a_100%)] text-white"
      >
        <div className="absolute inset-0 z-0">

        <svg
          className="absolute inset-0 w-full h-full  opacity-40 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
          aria-hidden="true"
          >
          <defs>
            <linearGradient id="meshGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <g stroke="url(#meshGradient)" strokeWidth="1.5" fill="none">
            <path d="M0 10 C300 600 600 800 900 700 C1200 600 1440 10 1440 600" />
            <path d="M0 20 C300 600 600 800 900 700 C1200 600 1440 20 1440 650" />
            <path d="M0 30 C300 600 600 800 900 700 C1200 600 1440 30 1440 650" />
            <path d="M0 40 C300 600 600 800 900 700 C1200 600 1440 40 1440 650" />
            <path d="M0 50 C300 600 600 800 900 700 C1200 600 1440 50 1440 650" />
            <path d="M0 60 C300 600 600 800 900 700 C1200 600 1440 50 1440 650" />
            <path d="M0 70 C300 600 600 800 900 700 C1200 600 1440 60 1440 700" />
            <path d="M0 80 C300 600 600 800 900 700 C1200 600 1440 60 1440 700" />
            <path d="M0 90 C300 600 600 800 900 700 C1200 600 1440 70 1440 750" />
            <path d="M0 105 C300 600 600 800 900 700 C1200 600 1440 70 1440 800" />
            <path d="M0 120 C300 600 600 800 900 700 C1200 600 1440 75 1440 850" />
            <path d="M0 140 C300 600 600 800 900 700 C1200 600 1440 76 1440 900" />
            <path d="M0 160 C300 600 600 800 900 700 C1200 600 1440 77 1440 1000" />
            <path d="M0 180 C300 600 600 800 900 700 C1200 600 1440 78 1440 1100" />
            <path d="M0 200 C300 600 600 800 900 700 C1200 600 1440 79 1440 1100" />
            <path d="M0 220 C300 600 600 800 900 700 C1200 600 1440 80 1440 1100" />
            <path d="M0 240 C300 600 600 800 900 700 C1200 600 1440 80 1440 1100" />
            <path d="M0 260 C300 600 600 800 900 700 C1200 600 1440 80 1440 1100" />
            <path d="M0 270 C300 600 600 800 900 700 C1200 600 1440 80 1440 1100" />
            <path d="M0 290 C300 600 600 800 900 700 C1200 600 1440 80 1440 1100" />
            <path d="M0 310 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 330 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 360 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 390 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 420 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 460 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 480 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 500 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 530 C300 600 600 800 900 700 C1200 600 1440 80 1440 1200" />
            <path d="M0 550 C300 600 600 800 900 700 C1200 600 1440 80 1440 1300" />
            <path d="M0 570 C300 600 600 800 900 700 C1200 600 1440 80 1440 1300" />
            <path d="M0 600 C300 600 600 800 900 700 C1200 600 1440 80 1440 1400" />
            <path d="M0 650 C300 600 600 800 900 700 C1200 600 1440 80 1440 1500" />
            <path d="M0 700 C300 600 600 800 900 700 C1200 600 1440 80 1440 1600" />
            <path d="M0 750 C300 600 600 800 900 700 C1200 600 1440 80 1440 1700" />
            <path d="M0 800 C300 600 600 800 900 700 C1200 600 1440 80 1440 1800" />
            <path d="M0 850 C300 600 600 800 900 700 C1200 600 1440 80 1440 1900" />
          </g>
        </svg>
        </div>
        <RevealOnScroll>
          <div className="relative text-center z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.1] md:leading-tight">
              {t("presentation")}
            </h1>

            <p className="text-blue-400/90 text-base md:text-xl mb-4 font-semibold tracking-widest uppercase">
              Software Engineer • AI Engineer
            </p>

            <p className="text-gray-400 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">{t("me")}</span>
                {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" /> */}
              </a>

            <div className="flex flex-wrap justify-center gap-3 w-full sm:w-auto">
              <a
                href="https://www.linkedin.com/in/lova-nasaina-rakotondrambola-61264731a/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center gap-2"
                >
                LinkedIn
              </a>

              <a
                href="https://github.com/Lova-Nasaina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                Github
              </a>

              <a
                href="#"
                className="flex-1 sm:flex-none border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                {t('cv')}
              </a>
            </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* <div className="absolute inset-0 bg-black/50 pointer-events-none" /> */}
      </section>
    </>
  );
};
