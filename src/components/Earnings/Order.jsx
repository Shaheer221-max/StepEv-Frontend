import React, { useEffect, useState } from "react";
import "./Order.css";
import Heading from "../Reusable/Heading";
import { getorder } from "../../api/axios";

const Order = ({handleClose,order}) => {
    const [orderData,setOrderData] = useState()

    const getOrderData = async() => {
      let response = await getorder(order)
      setOrderData(response.data)
      console.log("kaka",response.data)
    }

    useEffect(() => {
      getOrderData()

    },[])



    return (
        <>
      <div className="skill_text1 textHeadingAlign">
        <Heading title="Order Details" />
      </div>
      <div className="userinfo">
        <div className="userimage">
        <img
          Crossorigin="anonymous"
          src={`https://stepev-dev.up.railway.app/media/getImage/${orderData?.employer?.avatar}`}
          alt="User"
                    />
        </div>
        <div className="userdetails">
          <div>
            <h1 className="username">{orderData?.employer?.name}</h1>
          </div>
          <div>
            <div>
              <h1 className="useremail">{orderData?.employer?.email}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <h1 className="orderDescription">Description</h1>
        <p>{orderData?.description}</p>
      </div>
      <div className="description">
        <h1 className="orderDescription">Status</h1>
        <p>{orderData?.status}</p>
      </div>
      <div className="description">
        <h1 className="orderDescription">Amount</h1>
        <p className="price">${orderData?.totalPrice}</p>
      </div>
    </>
    )

}

export default Order;