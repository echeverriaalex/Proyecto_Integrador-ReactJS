import { useEffect } from "react";
import { getOrders } from "../../axios/axios-order";
import { MyPurchasesPageWrapper } from "./MyPurchasesPageStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderCards from "../../components/Orders/OrderCards";

const MyPurchasesPage = () => {

    const navigate = useNavigate();    
    const dispatch = useDispatch();    
    const { orders, error } = useSelector(state => state.orders)
    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
        if(!orders){
            getOrders(dispatch, currentUser)
        }
        if(!currentUser?.token){
            dispatch(fetchOrderFail('no hay token'))
        }else {
            error && dispatch(clearError())
        }
    }, [dispatch, currentUser, orders, error])
    
    return (
        <MyPurchasesPageWrapper>            
            <h2>My Purchases</h2>
            <OrderCards />
        </MyPurchasesPageWrapper>
    );
}

export default MyPurchasesPage;