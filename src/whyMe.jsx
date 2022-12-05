import React from "react";
import Fade from 'react-reveal/Fade';



const style = {
sectionContainer: `flex flex-col h-[110vh] bg-gray-100  shadow-xl border relative`,
}
function Whyme() {
  return (
<section className={style.sectionContainer}>
	<Fade top>
	<h3 className="text-4xl font-bold text-indigo-600 mt-3">Why Me?</h3>
</Fade>
			<div className="">
				<div className="">
				<Fade top>
					<p className="mt-6 text-lg dark:text-gray-400 font-semibold lg:w-88 mx-auto">I Can Finish My Work Faster Than You Think. Building <span className="text-myOnce font-semibold">Websites</span> From Scratch, Convert <span className="text-myOnce font-semibold">Your Ideas</span> To A real <span className="text-myOnce font-semibold">Designs</span>, Also I can Deal With <span className="text-myOnce font-semibold">APIs</span> and <span className="text-myOnce font-semibold">JSON</span>.</p>
					</Fade>
					<div className="mt-12 space-y-12">
						
					<Fade right>
							<div className="ml-4">
								<h4 className="text-lg font-semibold ml-14 text-myOnce inline">Creative Ideas  </h4> 
								<img className="w-12 h-12  transform rotate-12  inline " src="/images/goal.png" alt="creative ideas"></img>

								<ul className="mt-2 dark:text-gray-400 list-inside">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7 inline">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
									<li className="inline">Helping You To Reach Your Goal In Creativity Way.</li>

									<br />
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7 inline">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
									
									<li className="inline">Inspire Your Audience By Our Designs.</li>
									<br />
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7 inline">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
									<li className="inline">Always Next You To Create Great Work .</li>

									</ul>
							</div>
							</Fade>

							{/* <div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div> */}

							<Fade left> 

							<div className="ml-4">
								<h4 className="text-lg font-semibold leading-6 text-myOnce inline ml-14">Problem Solver</h4>
								<img className="w-12 h-12  transform rotate-12  inline " src="/images/idea.png" alt="creative ideas"></img>


								<ul className="mt-2 dark:text-gray-400 list-inside">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7 inline">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
									<li className="inline">Find Common Problems.</li>

									<br />
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7 inline">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
									
									<li className="inline">Research On Problems.</li>
									<br />
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6366f1" className="w-7 h-7 inline">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
									<li className="inline">Find Solution For Programing Problems.</li>

									</ul>							</div> 						</Fade>

						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
							
								</div>
							</div>
						
						</div>
					</div>
				</div>
				{/* <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 ">
					<img src="/images/whyMe-removebg-preview.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			
			</div> */}

</section>
  );
}

export default Whyme;



{/* <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 h-[80vh] bg-gray-100">
<img className="w-64 mx-auto" src="/images/whyMe.png" alt="" />
<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
  <blockquote>
    <p className="text-lg font-medium">
      “Tailwind CSS is the only framework that I've seen scale on large
      teams. It’s easy to customize, adapts to any design, and the build
      size is tiny.”
    </p>
  </blockquote>
  <figcaption className="font-medium">
    <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
    <div className="text-slate-700 dark:text-slate-500">
      Staff Engineer, Algolia
    </div>
  </figcaption>
</div>
</div> */}