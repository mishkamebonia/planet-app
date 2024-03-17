import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface MenuContextType {
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: Props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuActive, setIsMenuActive }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu() {
  const ctx = useContext(MenuContext);

  if (!ctx) {
    throw "useMenu must be called within MenuProvider";
  }

  return ctx;
}
