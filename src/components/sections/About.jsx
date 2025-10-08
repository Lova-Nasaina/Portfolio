import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Vue", "Typescript", "TailwindCSS", "Svelte"];
    
    const backendSkills = ["Node", "Python", "MongoDB", "Postgres", "GraphQL"];


    return ( 
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >

            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-grey-300 mb-6">
                        Passionnate Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam deserunt quos enim corporis accusamus dolorum at, nemo veritatis necessitatibus amet.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=> (
                                    <span
                                    key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rbga(59, 130, 246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backtend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key)=> (
                                    <span
                                    key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rbga(59, 130, 2246, 0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y transition-all">
                        <h3 className="text-xl font-bold mb-4 ">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>BS Computer Science</strong> - ISPM University (2021-2025)
                            </li>
                            <li>
                                Relevant Coursework : Data Sctructure , web Development , AI Engineering
                            </li>

                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y transition-all">
                        <h3 className="text-xl font-bold mb-4 ">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Softwar developer at ISIKA (2025)</h4>
                                <p>Developed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quidem soluta amet vero quam consequuntur error, odit sint! Maxime, amet.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repudiandae?</h4>
                                <p>Developed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quidem soluta amet vero quam consequuntur error, odit sint! Maxime, amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </RevealOnScroll>
        </section>
     );
}