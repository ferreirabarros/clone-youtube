import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../contexts/menuContext";
import { items } from './menuItems';
import { ButtonIcon, Container, MenuItem } from "./style";



function Menu(){
  
  const {openMenu} = useContext(MenuContext);

  const visibleItems = openMenu ? items : items.slice(0, 3);

  const navigate = useNavigate();

  return ( 
      <Container openMenu={openMenu}>
        {visibleItems.map((items) => (
          <MenuItem openMenu={openMenu} onClick={() => items.link && navigate(items.link)} key={items.text}>
            <ButtonIcon alt={items.text} src={items.icon}/>
            <span>
              {items.text}
            </span>
          </MenuItem>
        ))}
      </Container>
  )
}

export default Menu;