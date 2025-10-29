import Menu from "../Menu/Menu";
import { MenuProvider } from "../Menu/context/MenuContext";
import HamburgerButton from "../Menu/HamburgerButton/HamburgerButton";
import MobilePanel from "../Menu/MobilePanel/MobilePanel";

export default function Cabecalho () {
    return (
    <header className="relative flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold">Sistema Flow</h1>
        </div>
        <MenuProvider>
            <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                    <Menu />
                </div>
                <div className="sm:hidden">
                    <HamburgerButton className="text-white hover:bg-white/20" />
                </div>
            </div>
            <MobilePanel />
        </MenuProvider>
    </header>
)
};