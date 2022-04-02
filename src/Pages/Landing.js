import React from "react";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Forms from "../Components/Forms/Forms";
import FormsTwo from "../Components/Forms/FormsTwo";
import FromSubmit from "../Components/Forms/FromSubmit";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import PurrtoWin from "../Components/PurrToWin/PurrtoWin";
import Tab from "../Components/Tabs/Tab";

function Landing() {
  return (
    <>
      <Header />
      <Carousel />
      <Hero />
      <Tab />
      <PurrtoWin />
      <Forms />
      <Footer />
      <FromSubmit />
    </>
  );
}

export default Landing;
