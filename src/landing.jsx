import React from "react";
import "@fontsource/rubik";
import Typical from "./react-typical";
import Fade from 'react-reveal/Fade';


const style = {
  name: `text-5xl font-bold `,
};

const LandingPage = () => {
  return (
    <>
      <div className="container max-w-screen-lg mx-auto pb-10">
      <Fade top>

        <div className={style.name}>I'm Khodor Hasan</div>
        </Fade>

        <div className="mt-3 font-mono font-semibold text-2xl text-myOnce">
          <Typical
            steps={["Front-End Developer", 1000, "UI/UX Designer", 1000]}
            wrapper="p"
            loop={Infinity}
          />
        </div>{" "}
        <img
          src="/images/final.png"
          className="w-72 mx-auto"
          alt="Landing Page"
        />
      </div>    </>
  );
};

export default LandingPage;
