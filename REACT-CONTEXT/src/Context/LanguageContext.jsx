import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context Api",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
            headerTitle: "My application WITH Context Api",
            headerSubtitle: "My Header",
            headerLight: "Sure",
            headerDark: "Dark",
            buttonLogin: "Login",
            buttonLogout: "Close Session",
            mainWelcome: "Welcome Guest",
            mainHello: "Hello user",
            mainContent: "My main content",
            footerTitle: "My footer"
        }, 
};

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const hanldeLanguage = (e) =>{
        if(e.target.value === "es"){
            setLanguage("es");
            setTexts(translations.es)
        }else{
            setLanguage("en");
            setTexts(translations.en)
        }
    };

    const data = {texts, hanldeLanguage};

    return(
        <LanguageContext.Provider  value={data}> {children} </LanguageContext.Provider>
    )
};


export {LanguageProvider};
export default LanguageContext;