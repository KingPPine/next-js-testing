'use client'

import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/");
        //router.replace("/") replaces the current page, meaning the history won't be updated
        //router.back() sends you back a page
        //router.forward() sends you forward a page
    }

    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}