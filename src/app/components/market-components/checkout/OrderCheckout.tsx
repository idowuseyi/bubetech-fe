"use client"
import React, { useState } from 'react'
import AddNewCardForm from '../../form/checkout/AddNewCardForm';
import OrderCheckoutForm from '../../form/checkout/OrderCheckoutForm';
export default function OrderCheckout({ isGroupRent }: any) {
    const [selected, setSelected] = useState("");
    const [addNewCard, setAddNewCard] = useState(false);
    return (
        <div className=' relative  h-full flex flex-col gap-10 rounded-[20px] flex-1 w-full max-w-[852px] md:flex-[7]'>
            {addNewCard ? (<AddNewCardForm setAddNewCard={setAddNewCard} />) : (
                <OrderCheckoutForm isGroupRent={isGroupRent} setAddNewCard={setAddNewCard} />
            )
            }

        </div >

    )
}
