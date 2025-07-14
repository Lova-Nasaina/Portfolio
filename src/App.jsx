import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();


  return (
    <>
      <h1>Portfolio</h1>
      <h2>{ t("greeting") }</h2>
    </>
  )
}

export default App
