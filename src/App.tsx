import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Header from './Header';
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <Router> {/* Router wrapper, not necessary for anchor links but kept for structure */}
      <div className="App">
        <Header />  {/* Custom header component */}
        <img className="broderImage" src="broderna.jpg" alt="Bröderna" />
        <section id="Video"> {/* Target section with matching ID */}
          <VideoPlayer src='video.mp4'/>  {/* Custom header component */}
        </section>
        <section id="About"> {/* Target section with matching ID */}
          <AboutPage />  {/* Custom header component */}
        </section>
        <section id="Contact"> {/* Target section with matching ID */}
          <ContactPage />  {/* Custom header component */}
        </section>
      </div>
    </Router>
  );
}

export default App;
