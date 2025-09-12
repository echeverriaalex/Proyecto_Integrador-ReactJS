import { AnimatePresence } from "framer-motion";
import { HrStyled, LinkStyled, ModalContainerStyled } from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../../redux/users/userSlice";
import { formatUserName } from "../../../utils/functions";
import { ButtonStyled } from "../../UI/Button/ButtonStyled";

const ModalUser = () => {
    const { hiddenMenu, currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <AnimatePresence>
            {!hiddenMenu && (
                <ModalContainerStyled
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 0 }}
                    transition={{ duration: 0.5 }}
                    key="cart-user"
                >
                    <h2>Hola! { currentUser ? formatUserName(currentUser.nombre) : "" }</h2>
                    <HrStyled />
                    <LinkStyled to="/profile">View Profile</LinkStyled>
                    <ButtonStyled background="red" onClick={() => {
                        dispatch(setCurrentUser(null))
                        dispatch(toggleHiddenMenu())
                    }}>Logout</ButtonStyled>
            </ModalContainerStyled>
            )}
        </AnimatePresence>
    );
};

export default ModalUser;