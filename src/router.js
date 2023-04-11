import { createBrowserRouter } from "react-router-dom";
import PessoasPage from './Pages/PessoasPage';
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
    { 
        path: '/pessoas',
        element:<PessoasPage/>,
  },
  {
    path: '/*',
    element: <ErrorPage/>,
  }
])