import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import OneProduct from './pages/OneProduct/OneProduct';
import Products from './pages/Products/Products';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

const Layout = () => {
return (
  <div className='app'>
    <Nav />
    <Outlet />
    <Footer />
  </div>
)
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <OneProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
