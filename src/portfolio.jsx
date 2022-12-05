import React from 'react'

function Portfolio() {

    return (
        
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
   <h3 className="text-4xl font-bold text-indigo-600">My Work</h3>
   <br />
        <p className="text-lg text-gray-600">Check My Work In The Easiest Way.</p>
        <p className="text-lg text-myOnce font-bold">This Part Is In Progress.</p>

	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
		
	</div>
</section>
    )
}

export default Portfolio;