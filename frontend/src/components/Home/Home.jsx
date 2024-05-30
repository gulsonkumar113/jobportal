import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../main";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCatagories from "./PopularCatagories";
import PopularCompanies from "./PopularCompanies";


const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection/>
        <HowItWorks/>
        <PopularCatagories/>
        <PopularCompanies/>
      </section>
    </>
  );
};

export default Home;
