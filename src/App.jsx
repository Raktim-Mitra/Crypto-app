import DashBoard from "./pages/DashBoard/DashBoard"
import Transaction from "./pages/Transaction/Transaction"
import Support from "./pages/Support/Support"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
const router= createBrowserRouter([
  {
    path: "/",
    element: <DashBoard/>,
  },
  {
    path: "/transactions",
    element: <Transaction/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
])


function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App