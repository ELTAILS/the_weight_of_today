import { Game } from './components/view/Game';
import { Footer } from './components/layout/Footer';
import './assets/css/app.css';
import { Header } from './components/layout/Header';
import { GameProvider } from './components/GameContext';

function App()
{
  return (
    <>
      <Header />
      <main>
        <GameProvider>
          <Game />
        </GameProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
