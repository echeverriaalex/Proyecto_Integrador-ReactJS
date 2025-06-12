import { useDispatch } from "react-redux";
import { LinkContainerStyled, MenuIconStyled } from "../NavbarStyled";
import { toggleMenuHidden } from "../../../redux/menu/menuSlice";

const MenuIcon = () => {

    const dispatch = useDispatch();

    return (
        
        <LinkContainerStyled onClick={() => dispatch(toggleMenuHidden())}>
            <MenuIconStyled/>
        </LinkContainerStyled>
    )
}

export default MenuIcon;