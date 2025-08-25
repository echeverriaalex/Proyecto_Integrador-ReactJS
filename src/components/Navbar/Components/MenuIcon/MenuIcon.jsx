import { useDispatch } from "react-redux";
import { MenuIconStyled } from "../../NavbarStyled";
import { toggleMenuHidden } from "../../../../redux/menu/menuSlice";
import { IconContainerStyled } from "../IconStyles";

const MenuIcon = () => {
    
    const dispatch = useDispatch();

    return (
        <IconContainerStyled onClick={() => dispatch(toggleMenuHidden())}>
            <MenuIconStyled/>
        </IconContainerStyled>
    )
}

export default MenuIcon;