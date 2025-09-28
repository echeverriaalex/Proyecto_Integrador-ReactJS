import { useParams } from "react-router-dom";
import { DataContainerStyled, DetailsContainerStyled, DetailsSectionStyled, HrStyled, ItemContainerStyled, OrderContainerStyled, OrderDetailsContainerStyled, OrderDetailsPageWrapper, PaymentDetailsContainerStyled, PaymentDetailsSectionStyled, UserDataContainerStyled, UserDataSectionStyled } from "./OrderDetailsPageStyles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-order";
import OrderItemCard from "../../components/Orders/OrderItemCard/OrderItemCard";
import { shortenId } from "../../utils/functions";

const OrderDetailsPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user)
    const { orders } = useSelector(state => state.orders)
    const [visitedOrder, setVisitedOrder] = useState(null)

    useEffect(() => {

        if(!orders){
            getOrders(dispatch, currentUser);
        }

        setVisitedOrder(orders?.find((order) => order._id === id))
        console.log("Orden visitada:", visitedOrder);
    }, [id, currentUser, dispatch, orders]);

    return(
        <OrderDetailsPageWrapper>            
            {visitedOrder ? (
                <OrderContainerStyled>
                    <DataContainerStyled>
                        <DetailsSectionStyled>
                            <h2>Order details: #{ shortenId(id) }</h2>
                            <HrStyled />
                            <DetailsContainerStyled>
                                <p>Date: {new Date(visitedOrder?.createdAt)?.toLocaleString()}</p>
                                <p>Items: {visitedOrder?.items.length}</p>
                            </DetailsContainerStyled>
                        </DetailsSectionStyled>
                        <UserDataSectionStyled>
                            <h2>User Information</h2>
                            <HrStyled />
                            <UserDataContainerStyled>
                                <p>Name: {visitedOrder?.shippingDetails?.name}</p>
                                <p>Cellphone: {visitedOrder?.shippingDetails?.cellphone}</p>
                                <p>Location: {visitedOrder?.shippingDetails?.location}</p>
                                <p>Address: {visitedOrder?.shippingDetails?.address}</p>
                            </UserDataContainerStyled>
                        </UserDataSectionStyled>
                    </DataContainerStyled>
                    <OrderDetailsContainerStyled>
                        <ItemContainerStyled>
                            {
                                visitedOrder.items.map((item) => (
                                    <OrderItemCard key={item._id} item={item} />
                                ))
                            }
                        </ItemContainerStyled>
                        <PaymentDetailsSectionStyled>
                            <h2>Payment Details</h2>
                            <HrStyled />
                            <PaymentDetailsContainerStyled>
                                <p>Status: {visitedOrder.status}</p>
                                <p>Price: ${visitedOrder.price} </p>
                                <p>Shipping cost: ${visitedOrder.shippingCost} </p>
                                <HrStyled />
                                <p>Total: ${visitedOrder.total}</p>
                            </PaymentDetailsContainerStyled>
                        </PaymentDetailsSectionStyled>                
                    </OrderDetailsContainerStyled>
                </OrderContainerStyled>
            ) : (
                <p>Loading...</p>
            )}
        </OrderDetailsPageWrapper>
    );
}

export default OrderDetailsPage;