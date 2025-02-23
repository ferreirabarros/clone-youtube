import { createContext, ReactNode, useState } from "react";

interface IMenuContext {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

export const MenuContext = createContext({} as IMenuContext);

interface IProps{
  children: ReactNode,
}

export const MenuStore = ({children}: IProps)=>{
  
  const[openMenu, setOpenMenu] = useState(true);

  return(
    <MenuContext.Provider value={{openMenu, setOpenMenu}}>
      {children}
    </MenuContext.Provider>
  )
}
