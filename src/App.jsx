import './App.css'
import './index.css'
import { useTranslation } from 'react-i18next'
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';

function App() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-grey-100`}>

      </div>
    </>
  )
}

export default App
