import React from "react";
import { Fade } from "react-reveal";

const style = {
sectionContainer: `flex flex-col h-[110vh] bg-gray-100  shadow-xl border relative`,
}
function Testo() {
  return (
    <>
    <section className={style.sectionContainer}>
      <Fade>
      <div className="mb-8 text-center">
        <h3 className="text-4xl font-bold text-indigo-600">Testimonials</h3>
        <p className="text-lg text-gray-600">What others say about us</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <div className="p-4 text-gray-800 rounded-lg shadow-md">
          <div className="mb-2">
            <p className="mb-2 text-center text-gray-600 mb-5">
              Thank you Penny you have done a great job. I really respect what you do and how you do it.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                  alt="img"
                  className="object-cover object-center w-full h-full" />
              </div>
              <h5 className="font-bold text-indigo-600">John Doe</h5>
              <p className="text-sm text-gray-600">CEO / Founder</p>
            </div>
          </div>
        </div>
        <div className="p-4 text-gray-800 rounded-lg shadow-md">
          <div className="mb-2">
            <p className="mb-2 text-center text-gray-600 mb-5 ">
              Happy to work with you, he designed for us about 7 portfolios.They are all in high quality.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="object-cover object-center w-full h-full"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

              </div>
              <h5 className="font-bold text-indigo-600">Mohamad Ali</h5>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="p-4 text-gray-800 rounded-lg shadow-md">
          <div className="mb-2">
            <p className="mb-2 text-center text-gray-600 ">
              The best UI developer I have met. When it comes to making the work faster he does it with clean code, and making it friendly and easy to read.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  className="object-cover object-center w-full h-full" />
              </div>
              <h5 className="font-bold text-indigo-600">Michael James</h5>
              <p className="text-sm text-gray-600">web developer</p>
            </div>
          </div>
        </div>
      </div>
      </Fade>
      </section>









    </>
  );
}
export default Testo;
