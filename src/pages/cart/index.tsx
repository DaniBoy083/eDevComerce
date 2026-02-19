import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function CartPage() {
    const { cart, total, addItemCart, removeItemCart, compraAlert } = useContext(CartContext);
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <p className="font-medium">Seu carrinho esta vazio...</p>
                    <Link className="bg-black my-3 p-1 px-3 text-white font-medium rounded" to="/">
                        Voltar ao inicio
                    </Link>
                </div>
            )}
            {cart.map( (item) => (
                <section className="flex items-center justify-between border-b-2 border-gray-300">
                    <img
                        src={item.cover}
                        alt={item.title}
                        className="w-28"
                    />
                    <strong>
                        {item.price}
                    </strong>
                    <div key={item.id} className="flex items-center justify-center gap-3">
                        <button onClick={() => removeItemCart(item)} className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">
                            -
                        </button>
                        {item.amount}
                        <button onClick={() => addItemCart(item)} className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">
                            +
                        </button>
                    </div>
                    <strong className="float-right">
                        Subtotal: {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>
            ))}
            {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
            {cart.length !== 0 && <button onClick={compraAlert} className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">Finalizar compra!</button>}
        </div>
    );
}