import { Status } from "../status";
import logoStatus from "../../assets/img/fundo-status.jpg"
import logoAcoes from "../../assets/img/fundo-acoes.jpg"
import { Acoes } from "../acoes";

export const Game = () =>
{
  return (
    <>
      <section className="min-h-screen px-4 py-10 flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl text-center font-extrabold tracking-wide text-amber-100 drop-shadow mb-10">
            The Weight of Today
          </h1>

          <p className="block text-center text-amber-200 mb-4 text-2xl">
            Que comecem os jogos
          </p>

          <div className="rounded-2xl p-6 md:p-8 ">

            <div className="space-y-6">
              <div
                className="rounded-xl border-2 border-amber-700/80 bg-[#3f271a]/80 p-4 md:p-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(34, 22, 13, 0.7), rgba(34, 22, 13, 0.7)), url(${logoStatus})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >

                <h2 className="text-2xl text-amber-100 font-bold text-center mb-4">Registro do Aventureiro</h2>

                <div className="flex flex-wrap items-stretch justify-center gap-4">
                  <div className="w-full sm:w-55">
                    <Status name="Vida" color="bg-red-700/90" valor={100} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="Energia" color="bg-yellow-600/90" valor={100} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="Comida" color="bg-green-700/90" valor={5} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="Recursos" color="bg-blue-700/90" valor={0} />
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl border-2 border-amber-700/80 p-4 md:p-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(34, 22, 13, 0.7), rgba(34, 22, 13, 0.7)), url(${logoAcoes})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h2 className="text-2xl text-amber-100 font-bold text-center mb-4">Painel de Missoes e Acoes</h2>

                <div className="flex flex-wrap justify-center gap-3">
                  <Acoes name="Comer" color="bg-emerald-700 text-white border border-emerald-300" />
                  <Acoes name="Descansar" color="bg-cyan-700 text-white border border-cyan-300" />
                  <Acoes name="Explorar" color="bg-blue-700 text-white border border-blue-300" />
                  <Acoes name="Trabalhar" color="bg-yellow-700 text-white border border-yellow-300" />
                </div>
              </div>

              <div className="rounded-xl border-2 border-[#7a4f2d] bg-[#4a2f1d] text-[#f5e6cf] p-4 md:p-5">
                <h2 className="text-2xl font-bold text-amber-100 text-center mb-3">Resultados</h2>
                <p className="leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
