import './App.css'
import {
  createBrowserRouter,
  RouterProvider, Navigate
} from "react-router-dom";
import Home from './pages/home/Home';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { News } from './pages/newsandupdates/News';
import { Gallery } from './pages/gallary/Gallery';
import { Academia } from './pages/academia/Academia';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "newsandupdates",
    element: <News />
  },
  {
    path: "gallery",
    element: <Gallery />
  },
  {
    path: "academia",
    element: <Academia />
  },

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
