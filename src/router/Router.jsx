import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('services.json')
        },
        {
          path:'/serviceDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader:() => fetch('services.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },

      ]
    }
  ]);

  export default router