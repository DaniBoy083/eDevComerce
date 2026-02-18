import { createContext, useState, type ReactNode } from "react";
import { type productProps } from "../pages/home/index"

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (mewItem: productProps) => void;
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children}: CartProviderProps){
    const [cart, setCart] = useState<CartProps[]>([])
    function addItemCart(newItem: productProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)
        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCart(products => [...products, data])
    }
    return(
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider