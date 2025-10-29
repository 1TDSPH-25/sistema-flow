import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import { useEffect, useState } from "react";

export default function MobilePanel() {
    const { isOpen, close } = useMenu();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                close();
            }
        };

        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
            // Foca no primeiro elemento interativo quando o menu abre
            const firstButton = document.querySelector('#mobile-menu button') as HTMLElement;
            if (firstButton) {
                setTimeout(() => firstButton.focus(), 100);
            }
        } else {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeyDown);
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
        
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, close]);

    if (!isOpen && !isVisible) return null;

    return (
        <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
            className="sm:hidden fixed inset-0 z-50"
        >
            {/* Overlay com blur no fundo */}
            <div 
                className={`absolute inset-0 bg-white/95 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={close} 
                aria-hidden
            ></div>
            
            {/* Conteúdo do menu */}
            <div className={`relative z-10 flex flex-col h-full bg-white transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header do menu */}
                <div className="flex items-center justify-between p-6">
                    {/* Botão X para fechar */}
                    <button
                        onClick={close}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Fechar menu"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    {/* Logo/ícone estilizado */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                        <span className="text-white text-2xl font-bold">&</span>
                    </div>
                </div>

                {/* Navegação principal */}
                <div className="flex-1 flex flex-col justify-center px-8">
                    <nav className="space-y-8">
                        <Link 
                            to="/" 
                            className={`block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? '0.1s' : '0s' }}
                            onClick={close}
                            role="menuitem"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/login" 
                            className={`block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? '0.2s' : '0s' }}
                            onClick={close}
                            role="menuitem"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/cadastro" 
                            className={`block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? '0.3s' : '0s' }}
                            onClick={close}
                            role="menuitem"
                        >
                            Cadastro
                        </Link>
                        <Link 
                            to="/remedios" 
                            className={`block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? '0.4s' : '0s' }}
                            onClick={close}
                            role="menuitem"
                        >
                            Remédios
                        </Link>
                    </nav>
                </div>

                {/* Botão de call-to-action */}
                <div className="p-8">
                    <button 
                        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '0.5s' : '0s' }}
                    >
                        Entre em Contato +
                    </button>
                </div>
            </div>
        </div>
    );
}


