interface IProps {
  name: string;
  color: string;
  acao: () => void;
  desabilitado?: boolean;
}

export const Acoes = ({ name, color, acao, desabilitado }: IProps) => {
  return (
      <button type="button" className={`px-4 py-3 rounded-xl ${color} text-white border-2 border-amber-900 shadow-md text-center hover:scale-105 transition-transform duration-200 ease-out cursor-pointer`}>
        <strong className="block text-lg">{name}</strong>
      </button>
    );
}
