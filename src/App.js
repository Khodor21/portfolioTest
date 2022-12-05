import React from "react";
import Contact from "./contact";
import LandingPage from "./landing";
import Navbar from "./Navbar";
import Hooks from "./hooks";
import Speciliazing from "./speliaize";
import Testo from "./testominals";
import Whyme from "./whyMe";
import Portfolio from "./portfolio";
import { Footer } from "./footer";

// import { CakeIcon } from "@heroicons/react/solid";

const style = {
  appContainer: ` text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100  shadow-xl border relative`,
};
function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        <br />
        <br />
        <br />
        <br />

        <LandingPage />
        <Speciliazing />
      
        <Whyme />
        <Portfolio />

        <Testo />
        <br />
        
        <Contact />
        <Footer />

      </section>
    </div>
  );
}
export default App;
