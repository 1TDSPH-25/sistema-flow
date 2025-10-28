import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from "react";

type MenuContextValue = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function MenuProvider({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenuContext(): MenuContextValue {
    const ctx = useContext(MenuContext);
    if (!ctx) {
        throw new Error("useMenuContext deve ser usado dentro de <MenuProvider>");
    }
    return ctx;
}


