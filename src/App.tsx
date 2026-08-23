import { Game } from './components/view/game';
import { Footer } from './components/layout/footer';
import './assets/css/app.css';
import { Header } from './components/layout/header';
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
