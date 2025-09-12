import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatUserName } from "../../utils/functions";
import { UserPageWrapper } from "./UserPageStyles";

const UserPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);


    useEffect(() => {
        /*
        if(!orders){
            getOrders(dispatch, currentUser)
        }
        */
        if(!currentUser?.token){
            //dispatch(fetchOrderFail('no hay token'))
        }else {
            //error && dispatch(clearError())
        }
    }, [dispatch, currentUser ])


    return (
        <UserPageWrapper>
            <h2>Hello {currentUser ? `${formatUserName(currentUser.nombre)}!` : "No user logged in"}</h2>
        </UserPageWrapper>
    );
};

export default UserPage;