export const Footer = () => 
{
    const anoAtual: number = new Date().getFullYear();

    return(
        <>
            <footer className="bg-gray-800 text-white p-4 text-center mt-12">
                Todos os direitos reservados - Criador <a href="https://github.com/ELTAILS" target="_blank" rel="noopener noreferrer" className="hover:underline">Wagner Junior</a> - {anoAtual}
            </footer>
        </>
    )
}