interface IProps {
  name: string;
  href: string;
  color: string;
}

export const BTN = ({ name, href, color }: IProps) => {
  return (
      <a
        href={href}
        className={`inline-block px-6 py-2 rounded-2xl text-lg font-semibold
          transition-transform duration-200 cursor-pointer ease-out
          hover:scale-[1.03] ${color}`}
      >
        {name}
      </a>
  );
};
