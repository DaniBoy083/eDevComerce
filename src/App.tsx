import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/CartContext";

export default function App() {

  return (
    <div>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  )
}