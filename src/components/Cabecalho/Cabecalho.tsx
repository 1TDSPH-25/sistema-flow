import Menu from "../Menu/Menu";

export default function Cabecalho () {
    return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <h1>Sistema Flow</h1>
        < Menu />
    </header>
)
};