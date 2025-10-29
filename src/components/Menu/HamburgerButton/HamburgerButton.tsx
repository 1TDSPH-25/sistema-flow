import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { useMenu } from "../hooks/useMenu";

type HamburgerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(function HamburgerButton(
    { className = "", label = "Abrir menu", ...rest },
    ref
) {
    const { isOpen, toggle } = useMenu();

    return (
        <button
            ref={ref}
            type="button"
            aria-label={label}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggle}
            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-200 hover:bg-gray-100/10 ${className}`}
            {...rest}
        >
            <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden className="block w-6 transform transition-all duration-300">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0 translate-x-3" : "mb-1.5"
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}></span>
            </span>
        </button>
    );
});

export default HamburgerButton;


