import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
// import { cache } from "react";

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng : 'en',
        debug : true,
        fallbackLng : 'en',
        interpolation : { escapeValue : false },
        backend : {
            loadPath : '/locales/{{lng}}.json'
        },
        detection : {
            order : ['localStorage', 'navigator'],
            caches : ['localStorage']
        }
    });

export default i18next;