import './App.css';
import Cart from './components/Cart';
import DashBoard from './components/DashBoard';
import {
  createBrowserRouter,
  RouterProvider, Route, createRoutesFromElements
} from "react-router-dom";
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<DashBoard />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ));
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
