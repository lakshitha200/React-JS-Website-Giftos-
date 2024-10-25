

import './App.css'
import Contact from './Components/Contact Us/contact'
import Header from './Components/header/header'
import Home from './Components/Home/home'
import RootLayout from './Components/Layouts/rootLayout'
import Shop from './Components/Shop/shop'
import Testimonial from './Components/Testimonial/testimonial'
import WhyUS from './Components/Why Us/whyUs'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer/footer'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="whyus" element={<WhyUS />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
