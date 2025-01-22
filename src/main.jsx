import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetail from './components/BookDetail/BookDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element:<HomePage></HomePage>,
      },
      {
        path:"/books/:bookId",
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:"/dashboard",
        element:<DashBoard></DashBoard>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
