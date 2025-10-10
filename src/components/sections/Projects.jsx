import { RevealOnScroll } from "../RevealOnScroll";
import image from "../../assets/img/isika.webp";
import imageAnalyse from "../../assets/img/Capture.PNG";
import imageRouge from "../../assets/img/Capture2ron.jpg";

export const Projects = () => {
    return ( 
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Feature Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.2)] transition">
                        <img 
                            src={image} 
                            alt="Plateforme digital" 
                            className="w-full h-50 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="text-xl font-bold mb-2">Plateforme digital de participation citoyenne</h3>
                        <p className="text-gray-400 mb-4">
                            {" "}
                            Une plateforme digitale de concertation citoyenne pour l’association ISIKA, permettant aux citoyens et acteurs publics de collaborer et de suivre les initiatives locales.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Laravel", "Sass", "Mysql"].map((tech, key) =>(
                                <span
                                    key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project --
                            </a>
                        </div>

                    </div>

                     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.2)] transition">
                        {/* <img 
                            src={image} 
                            alt="Plateforme digital" 
                            className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
                        /> */}
                        <h3 className="text-xl font-bold mb-2">Event Manager</h3>
                        <p className="text-gray-400 mb-4">
                            {" "}
                            Application Web de gestion d'evennement
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node", "Tailwind", "MongoDB"].map((tech, key) =>(
                                <span
                                    key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project --
                            </a>
                        </div>

                    </div>
                     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.2)] transition">
                        <img 
                            src={imageRouge} 
                            alt="Plateforme digital" 
                            className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="text-xl font-bold mb-2">Rouge-Nature</h3>
                        <p className="text-gray-400 mb-4">
                            {" "}
                            Un site moderne qui met en lumière de nouveaux produits à base de baies rouges, pour séduire et informer les visiteurs en quelques clics.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["VanillaJS", "CSS", "HTML"].map((tech, key) =>(
                                <span
                                    key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project --
                            </a>
                        </div>

                    </div>
                     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.2)] transition">
                        <img 
                            src={imageAnalyse} 
                            alt="Plateforme digital" 
                            className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
                        />
                        <h3 className="text-xl font-bold mb-2">Analyse des donnees du COVID19</h3>
                        <p className="text-gray-400 mb-4">
                            {" "}
                            Ce projet de collection, traitement et analyser des données liées à la pandémie de COVID-19 afin de fournir des visualisations claires et interactives.
                            en analysant les tendances, suivre l’évolution des cas et aider à la prise de décision grâce à des indicateurs précis et des graphiques intuitifs.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Seaborn", "Scikit-Learn", "Plotly", "Matplotlib"].map((tech, key) =>(
                                <span
                                    key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project --
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-10">
                <button className="
                    bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg 
                    hover:bg-blue-600 hover:shadow-lg transition-all duration-300
                    flex items-center gap-2
                ">
                    Tous mes projets 
                    <span className="text-lg">→</span>
                </button>
            </div>
            </RevealOnScroll>
        </section>
     );
}