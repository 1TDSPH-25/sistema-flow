import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";

export default function MobilePanel() {
    const { isOpen, close } = useMenu();

    if (!isOpen) return null;

    return (
        <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
            className="sm:hidden fixed inset-0 z-50"
        >
            <div className="absolute inset-0 bg-black/90" onClick={close} aria-hidden></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <nav className="flex flex-col items-center gap-6 text-xl font-semibold" onClick={close}>
                    <Link to="/" className="hover:opacity-80" role="menuitem">HOME</Link>
                    <Link to="/login" className="hover:opacity-80" role="menuitem">LOGIN</Link>
                    <Link to="/cadastro" className="hover:opacity-80" role="menuitem">CADASTRO</Link>
                    <Link to="/remedios" className="hover:opacity-80" role="menuitem">REMÉDIOS</Link>
                </nav>
                <div className="mt-10 flex items-center gap-6 text-2xl opacity-90">
                    <a href="#" aria-label="Facebook" className="hover:opacity-70">⬤</a>
                    <a href="#" aria-label="Instagram" className="hover:opacity-70">⬤</a>
                    <a href="#" aria-label="Twitter" className="hover:opacity-70">⬤</a>
                    <a href="#" aria-label="GitHub" className="hover:opacity-70">⬤</a>
                </div>
            </div>
        </div>
    );
}


