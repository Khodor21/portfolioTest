/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Fade from 'react-reveal/Fade';
import { initializeApp } from 'firebase/app';


const style = {
  title:"text-4xl font-bold text-indigo-600 tracking-tight sm:text-3xl dark:text-gray-50",
  SpeciliazeIn: `mt-3`,
  webDev: `text-xl mb-10 mt-4 font-bold text-myOnce1  `,
};
function Speciliazing() {
  return (
    <section className={style.SpeciliazeIn}>

      <h3 className={style.title}>Specializing In</h3>
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 lg:ml-12">
        <Fade right>
        <div className="lg:max-w-sm rounded-lg shadow-md ">
          <div className={style.webDev}>1-Web Development</div>{" "}
          <img
            src="/images/[removal.ai]_tmp-635457512209e.png"
            alt=""
            className=""
          />
          <div className="p-4">
          <p className="mb-2 leading-normal">
              I like to code things from scratch, and enjoy bringing ideas to life in the browser. 
                         </p>
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            Languages I speak: </h4>
            <p className="mt-2">
            HTML, CSS, TailWind, Javascript, ReactJS.
            </p>
            <h4 className="text-xl font-semibold tracking-tight text-blue-600 mt-3">
            Dev Tools:</h4>
<p className="mt-2 w-full">
            Bootstrap, Semantic, Materialize, GIT, GitHub, Saas, VueJs, +10 React Libraries.
            </p>
          </div>
        </div>
        </Fade>

        <Fade left>

        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
          <div className={style.webDev}> 2-UI/UX Design</div>{" "}
          <img
            src="/images/[removal.ai]_tmp-63545840a2278.png.png"
            alt=""
            className=""
          />
          <div className="p-4">
           
            <p className="mb-2 leading-normal">
            I value simple content structure, clean design patterns, and thoughtful interactions.
            </p>
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            Things I enjoy designing:</h4>
            <p className="mt-2">
            UX, UI, Websites, Applications.
            </p>
            <h4 className="text-xl font-semibold tracking-tight text-blue-600 mt-3">
            Design Tools:
</h4>
<p className="mt-2 w-full">
            Figma, Adobe PS, Sketch, FontAwesome, Webflow.
            </p>
          </div>
        </div>
        </Fade>
        <Fade right>


        <div className="w-full rounded-lg shadow-md lg:max-w-sm ">
          <div className={style.webDev}> 3-DataBase </div>{" "}
          <img
            src="/images/[removal.ai]_tmp-635459b8b1994.png"
            alt=""
            className=""
          />
         <div className="p-4">
           
           <p className="mb-2 leading-normal">
           I genuinely care about DataBase, and love building Websites with strong DataBase.
</p>
           {/* <h4 className="text-xl font-semibold tracking-tight text-blue-600">
           Things I enjoy designing:</h4>
           <p className="mt-2">
           UX, UI, Websites, Applications.
           </p> */}
           <h4 className="text-xl font-semibold tracking-tight text-blue-600 mt-3">
           Data Tools:
</h4>
<p className="mt-2 w-full">
           Firebase, EmailJS.
           </p>
         </div>
        </div>
        </Fade>

      </div>
     
    </section>
  );
}

export default Speciliazing;
