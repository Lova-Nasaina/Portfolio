import { RevealOnScroll } from "../RevealOnScroll";
import { Helmet } from "react-helmet-async";

export const Home = () => {
    return ( 
      <>
        <Helmet>
          <title>Accueil | Nasaina Lova - Développeur Fullstack</title>
          <meta
            name="description"
            content="Découvrez mes réalisations web et mes projets fullstack en React, Laravel et Data Science."
          />
        </Helmet>
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_center,_#051c5cc0_0%,_#020203_50%,_#0a0a0a_100%)] text-white">
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
            <RevealOnScroll>
            <div  className="relative text-center z-100">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Lova Nasaina
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                    Je suis un développeur passionné, spécialisé dans la résolution de problèmes complexes et l’intégration de solutions intelligentes avec l’IA. J’aime relever des défis, innover et optimiser les processus tout en améliorant continuellement mes compétences pour fournir des solutions performantes et adaptées aux besoins.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#contact" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center gap-2">
                        Contact Me
                    </a>

                    <a href="https://www.linkedin.com/in/lova-nasaina-rakotondrambola-61264731a/" target="_blank" rel="noopener noreferrer" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50"><path fill="currentColor" d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z"></path></svg>
                        LinkedIn
                    </a>

                    <a href="https://github.com/Lova-Nasaina" target="_blank" rel="noopener noreferrer" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><title>github</title><path fill="currentColor" fillRule="evenodd" d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"></path></svg>
                        Github
                    </a>

                    <a href="#" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                        My CV
                    </a>
                </div>

            </div>
            </RevealOnScroll>

             {/* <div className="absolute inset-0 bg-black/50 pointer-events-none" /> */}
        </section>
      </>
     );
}