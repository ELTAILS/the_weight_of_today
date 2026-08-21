import { BTN } from "../btn"
import logo  from "../../assets/img/logo_sem_fundo.png"

export const Header = () =>
{
    return(
        <>
          <header className="flex items-center gap-5 justify-between p-6 mb-12 bg-gray-800 text-white">

              <a href="#">
                <img src={logo} alt="Logo do site" className="w-16 h-16" />
              </a>

              <h1 className="text-2xl p-2 underline">
                  The Weight of Today
              </h1>

              <div className="flex gap-5 ml-auto">
                  <BTN name="Game" href="#" color="bg-green-500"></BTN>
                  <BTN name="Regras" href="#" color="bg-red-500"></BTN>
              </div>

          </header>
        </>
    )
}
