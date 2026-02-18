import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";

export default function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}