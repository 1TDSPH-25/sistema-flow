import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";

export default function MobilePanel() {
    const { isOpen, close } = useMenu();

    if (!isOpen) return null;

    return (
        <div
            id="mobile-menu"
            role="menu"
            aria-label="Menu móvel"
            className="sm:hidden absolute right-4 top-full mt-2 w-56 rounded-md bg-white text-gray-900 shadow-lg ring-1 ring-black/10 focus:outline-none z-50"
        >
            <nav className="flex flex-col p-2" onClick={close}>
                <Link to="/" className="px-3 py-2 rounded hover:bg-gray-100" role="menuitem">Home</Link>
                <Link to="/login" className="px-3 py-2 rounded hover:bg-gray-100" role="menuitem">Login</Link>
                <Link to="/cadastro" className="px-3 py-2 rounded hover:bg-gray-100" role="menuitem">Cadastro</Link>
                <Link to="/remedios" className="px-3 py-2 rounded hover:bg-gray-100" role="menuitem">Remédios</Link>
            </nav>
        </div>
    );
}


