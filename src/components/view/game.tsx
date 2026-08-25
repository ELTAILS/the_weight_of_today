import { Status } from "../Status";
import logoStatus from "../../assets/img/fundo-status.jpg"
import logoAcoes from "../../assets/img/fundo-acoes.jpg"
import { Acoes } from "../Btn";
import { useGameContext } from "../GameContext";

export const Game = () =>
{
const { vida, energia, comida, recursos, historico, comer, descancar, explorar, trabalhar, contadorAcoes, status } = useGameContext();

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
                    <Status name="Vida" color="bg-red-700/90" valor={vida} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="Energia" color="bg-yellow-600/90" valor={energia} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="Comida" color="bg-green-700/90" valor={comida} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="Recursos" color="bg-blue-700/90" valor={recursos} />
                  </div>
                  <div className="w-full sm:w-55">
                    <Status name="acão" color="bg-purple-500" valor={contadorAcoes} />
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
                  <Acoes name="Comer" color="bg-yellow-500" acao={comer} desabilitado={comida <= 0 || status !== 'jogando'} />
                  <Acoes name="Descansar" color="bg-green-500" acao={descancar} desabilitado={status !== 'jogando'} />
                  <Acoes name="Trabalhar" color="bg-red-500" acao={trabalhar} desabilitado={comida <= 0 || energia <= 0 || status !== 'jogando'} />
                  <Acoes name="Explorar" color="bg-purple-500" acao={explorar} desabilitado={status !== 'jogando'} />
                </div>
              </div>

              <div className="rounded-xl border-2 border-[#7a4f2d] bg-[#4a2f1d] text-[#f5e6cf] p-4 md:p-5">
                <h2 className="text-2xl font-bold text-amber-100 text-center mb-3">Sua historia</h2>
                <p className="leading-relaxed text-center" style={{ whiteSpace: 'pre-line' }}>
                  {historico.join('\n')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
