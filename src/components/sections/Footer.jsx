export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return ( 
        <footer id="footer" className="border-t border-white/5 bg-black/20 py-8 ">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-center">
                <p className="text-gray-400 text-base md:text-lg">
                    © {currentYear} <span className="text-white font-bold tracking-tight">Lova-Nasaina</span>
                </p>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.2em]">
                    Software & AI Engineer
                </p>
                
                {/* Optionnel : Ajout d'une touche subtile en bas */}
            </div>
            <div className="mt-4 w-12 h-[1px] mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </footer>
    );
};

// export const Footer = () => {
//     return ( 
//         <footer className="w-full py-10 border-t border-white/5">
//             <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-center">
//                 <p className="text-gray-400 text-base md:text-lg">
//                     © <span className="font-bold text-white"> Lova-Nasaina </span> 
//                 </p>
//                 <span className="hidden md:inline text-gray-600">|</span> 
//                 <p className="text-gray-400 text-base md:text-lg">
//                     Software & AI Engineer
//                 </p>
//             </div>
//         </footer>
//     );
// }