import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

export function Header() {
    const { cartAmount } = useContext(CartContext)
    return(
        <header className="w-full px-1 bg-gray-300">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 max-auto">
                <Link className="font-bold text-2xl" to="/">
                    eDevComerce
                </Link>
                <Link className="relative" to="/cart">
                    <FiShoppingCart size={24} color="black"/>
                    {cartAmount > 0 && (
                        <span className="absolute -top-3 -right-3 px-2.5 bg-amber-400 rounded-full w-6 flex items-center justify-center text-black tezt-xs">
                            {cartAmount}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}