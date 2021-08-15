import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';


const languages = ['JavaScript', 'Python'];

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [lang, setLang] = useState(languages[0]);

  return (
<AppContext.Provider value={{lang, setLang}}>
{children}
</AppContext.Provider>
)}

const App = () => {

    return (
  <AppProvider>
      <MainSection />
  </AppProvider>
    );

}

const MainSection = () => {
  const {lang, setLang}  = useContext(AppContext)

  const toggleLang = (e) => {
    e.preventDefault();

    if (lang === languages[0]) {
      setLang(languages[1])
    } else {
      setLang(languages[0])
    }
    
  }

    return (
      <div>
        <p id="favoriteLanguage">Favorite programing language: {lang}
        <button id="changeFavorite" onClick={toggleLang}>Toggle language</button>
      </div>
    )

}

ReactDOM.render(
  
  <App />,

  document.getElementById('root')
);









































import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];

const LanguageContext = createContext(null);

function LanguageContextProvider({ children }) {
  const [lanIdx, setLanIdx] = useState(0);
  const currentLanguage = languages[lanIdx];

  const toggleLanguage = () => {
    if (lanIdx === languages.length - 1) {
      setLanIdx(0);
    } else {
      setLanIdx((prev) => prev + 1);
    }
  }

  return (
    <LanguageContext.Provider value={[currentLanguage, toggleLanguage]}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguageContext() {
  return useContext(LanguageContext);;
}

function App() {
  return (
    <LanguageContextProvider>
      <MainSection />
    </LanguageContextProvider>
  )
}

function MainSection() {
  const [language, toggleLanguage] = useLanguageContext();
  return (
    <div>
      <p id="favoriteLanguage">Favorite programing language: {language}
      <button id="changeFavorite" onClick={toggleLanguage}>Toggle language</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);