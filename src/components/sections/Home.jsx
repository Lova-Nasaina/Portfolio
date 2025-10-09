import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return ( 
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950 text-white">
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

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti ut temporibus sequi velit aliquam voluptatibus numquam, sit quidem alias reiciendis fugit, aut sint. Ipsam quas ea earum voluptatibus consequatur!
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>

             {/* <div className="absolute inset-0 bg-black/50 pointer-events-none" /> */}
        </section>
     );
}