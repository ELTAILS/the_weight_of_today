interface IProps {
  name: string;
  color: string;
  valor: number;
  className?: string;
}

export const Status = ({ name, color, valor, className = "" }: IProps) => {
  return (
      <>
        <div className={`px-4 py-3 rounded-xl ${color} text-white border-2 border-amber-900 shadow-md text-center ${className}`}>
          <strong className="block text-lg">{name}</strong>
          <p className="text-3xl font-bold leading-none mt-2">{valor}</p>
        </div>
      </>
    );
};
