import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Header from './Header';
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import VideoPlayer from "./VideoPlayer";
import ProductCarousel from "./ProductCarousel"; // Import your carousel component

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    imageUrl: 'mayo1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    imageUrl: 'mayo2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
    imageUrl: 'mayo3.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
    imageUrl: 'mayo3.jpg'
  }
  // Add more products as needed
];


function App() {  
  return (
    <Router>
      <div className="App">
        <Header />
        <img className="broderImage" src="broderna.jpg" alt="Bröderna" />
        <section id="Video">
          <VideoPlayer src='video.mp4'/>
        </section>
        <section id="About">
          <AboutPage />
        </section>
        <section id="Contact">
          <ContactPage />
        </section>
        <section id="Products">
          <ProductCarousel products={products} />
        </section>
      </div>
    </Router>
  );
}

export default App;
