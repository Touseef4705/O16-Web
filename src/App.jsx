import React from "react";
import Header from "./components/Header/header";
import HeroSection from "./components/HeroSection/heroSection.jsx";
import MobileAppPromo from "./components/mobileAppPromo.jsx";
import Card from "./components/card.jsx";
import ImagePage from "./components/Images.jsx";
import Testimnial from "./components/testimonial.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">

      <Header />
      <HeroSection />

      <MobileAppPromo />
      <Card />
      <ImagePage />
      <Testimnial />
      <Footer />


    </div>
  );
}

export default App;
