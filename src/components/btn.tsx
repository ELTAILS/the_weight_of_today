interface IProps {
  name: string;
  color: string;
  acao: () => void;
  desabilitado?: boolean;
}

export const Acoes = ({ name, color, acao, desabilitado }: IProps) => {
  return (
      <button type="button" disabled={desabilitado} className={`disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 ${color} px-4 py-3 rounded-xl  text-white border-2 border-amber-900 shadow-md text-center  hover:scale-105 transition-transform duration-200 ease-out cursor-pointer`} onClick={acao}>
        <strong className="block text-lg">{name}</strong>
      </button>
    );
}
