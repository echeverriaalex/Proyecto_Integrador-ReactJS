import { AnimatePresence } from "framer-motion";
import { HrStyled, LinksContainerStyled, LinkStyled, ModalContainerStyled, SpanStyled, UsernameStyled } from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleMenuHidden } from "../../../redux/users/userSlice";
import { formatUserName } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";

const ModalUser = () => {
    const { hiddenMenu, currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {!hiddenMenu && (
                <ModalContainerStyled
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key="cart-user"
                >
                    <UsernameStyled>Hello { formatUserName(currentUser.nombre) } ! </UsernameStyled>
                    <HrStyled />
                    <LinksContainerStyled>
                        <LinkStyled to="/profile">View Profile</LinkStyled>
                        <LinkStyled to="/mypurchases">My Purchases</LinkStyled>
                    </LinksContainerStyled>
                    <SpanStyled onClick={() => {
                        dispatch(setCurrentUser(null))
                        dispatch(toggleMenuHidden())
                        navigate('/')
                    }}>Logout</SpanStyled>
            </ModalContainerStyled>
            )}
        </AnimatePresence>
    );
};

export default ModalUser;