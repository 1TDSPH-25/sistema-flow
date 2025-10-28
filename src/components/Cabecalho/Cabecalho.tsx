import Menu from "../Menu/Menu";
import { MenuProvider } from "../Menu/context/MenuContext";
import HamburgerButton from "../Menu/HamburgerButton/HamburgerButton";

export default function Cabecalho () {
    return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <h1>Sistema Flow</h1>
        <MenuProvider>
            <div className="flex items-center gap-4">
                <div className="hidden sm:block"><Menu /></div>
                <div className="sm:hidden">
                    <HamburgerButton className="text-white" />
                </div>
            </div>
        </MenuProvider>
    </header>
)
};