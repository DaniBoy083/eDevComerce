import { createContext, useState, type ReactNode } from "react";
import { type productProps } from "../pages/home/index"
import toast from "react-hot-toast"

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (mewItem: productProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string;
    compraAlert: () => void;
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
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");
    function addItemCart(newItem: productProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)
        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            totalResultCart(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }
    function removeItemCart(product: CartProps) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if (cart[indexItem]?.amount > 1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount -1;
            cartList[indexItem].total = cartList[indexItem].total = cartList[indexItem].price;

            setCart(cartList)
            totalResultCart(cartList)
            return;
        }
        const removeItem = cart.filter(item => item.id !== product.id) // Passa por toda a lista e verifica o item que foi clicado se for igual ao indice do item ele remove da lista.
        setCart(removeItem);
        totalResultCart(removeItem)
    }
    function totalResultCart(items: CartProps[]) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
        const formated = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        setTotal(formated);
    }
    function compraAlert() {
        toast.loading("Processando compra...");
        setTimeout(() => {
            toast.dismiss();
            toast.success("Compra finalizada!");
        }, 2000)
    }
    return(
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart, removeItemCart, total, compraAlert }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider