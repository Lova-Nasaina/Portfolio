import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { CheckCircle2, XCircle, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {

   const { t } = useTranslation();
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Notification de chargement
    const loadingToast = toast.loading('Envoi en cours...', {
        style: {
            borderRadius: '10px',
            background: '#18181b',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
    });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((result) => {
        console.log("Resulat : ", result.text);
        toast.success('Message envoyé avec succès !', {
            id: loadingToast, // Remplace le chargement
            icon: <CheckCircle2 size={24} color="#10b981" />, 
            duration: 5000,
            style: {
                borderRadius: '10px',
                background: '#18181b',
                color: '#fff',
                border: '1px solid rgba(59, 130, 246, 0.5)',
            },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log("Error: ", err);
        toast.error('Erreur lors de l\'envoi...', {
            id: loadingToast,
            style: {
                borderRadius: '10px',
                background: '#18181b',
                color: '#fff',
                border: '1px solid rgba(239, 68, 68, 0.5)',
            },
        });
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
            <RevealOnScroll>
                
                <div className="w-full md:w-[600px] glass p-6 md:p-10 rounded-2xl border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {t('colaborate')}
                    </h2>
                    
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                                placeholder={t('yname')}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        
                        <div className="relative">
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                                placeholder="Email@gmail.com"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        
                        <div className="relative">
                            <textarea
                                name="message" 
                                rows={5}
                                required 
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 resize-none"
                                placeholder={t('message')}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        >
                            {t('sendMessage')} <Send size={18} />
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
  );
};
