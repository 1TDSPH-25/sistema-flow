import { ButtonHTMLAttributes, forwardRef } from "react";
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
            className={`inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${className}`}
            {...rest}
        >
            <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden className="block w-6">
                <span className={`block h-0.5 bg-current transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : "mb-1.5"}`}></span>
                <span className={`block h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : "mb-1.5"}`}></span>
                <span className={`block h-0.5 bg-current transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
            </span>
        </button>
    );
});

export default HamburgerButton;


