import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch(' /services.json'),
        },
        {
          path:'/serviceDetails/:id',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader:() => fetch('/services.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/about',
          element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
          path:'/career',
          element:<PrivateRoute><Career></Career></PrivateRoute>
        },

      ]
    }
  ]);

  export default router