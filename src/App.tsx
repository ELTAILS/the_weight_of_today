import { Game } from './components/view/game'
import { Footer } from './components/layout/footer'
import './assets/css/app.css'
import { Header } from './components/layout/header'

function App() 
{
  return (
    <> 
      <Header />
      <Game />
      <Footer />
    </>
  )
}

export default App
