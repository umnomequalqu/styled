import { createBrowserRouter } from "react-router-dom";
import PessoasPage from './Pages/PessoasPage';
export const router = createBrowserRouter([
    {
        path:'/',
        element: <PessoasPage/>,
  }
])