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
                <a href="#" className={`inline-block px-6 py-2 rounded-2xl text-lg font-semibold transition-transform duration-200 cursor-pointer ease-out hover:scale-[1.03] bg-red-500`}>Rules</a>
                <a href="#" className={`inline-block px-6 py-2 rounded-2xl text-lg font-semibold transition-transform duration-200 cursor-pointer ease-out hover:scale-[1.03] bg-green-500`}>Game</a>
              </div>

          </header>
        </>
    )
}
