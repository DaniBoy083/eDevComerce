import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/CartContext";
import { Toaster } from "react-hot-toast"

export default function App() {

  return (
    <div>
      <CartProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  )
}