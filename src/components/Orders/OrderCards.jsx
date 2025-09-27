import { useSelector } from "react-redux";
import { OrderContainerStyled, PurchasesContainerStyled } from "./OrderCardsStyles";

const OrderCards = () => {

    const { orders, loading, error } = useSelector(state => state.orders)

    /*
    if(loading && !orders){
        return <Loader styles={{ height: "50px", width: "50px" }}/>
    }
    */

   
    if(error) {
        return <h2 style={{textAlign: 'center'}}>{error}</h2>
    }

    return(
        <PurchasesContainerStyled>
            {
                orders?.length ? (
                    orders.map(order => (
                        <OrderContainerStyled key={order._id}>
                            <h2>ID order: # {order._id}</h2>
                            <h3>${order.price}</h3>
                            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                        </OrderContainerStyled>
                    ))
                ) : (
                    <h2 style={{textAlign: 'center'}}>No orders found</h2>
                )
            }
        </PurchasesContainerStyled>
    )
};

export default OrderCards;