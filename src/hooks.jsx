import React, { useState, useEffect } from 'react'

function Hooks() {
    const [counter, setCounter] = useState(0);
   const [name,setName] = useState("")

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      setTimeout(() => {
        setCounter((count) => count + 1);
      }, 1000);
    });
    
    function printValues(e) {
    e.preventDefault();
    console.log(username, password);
  }
    return (
        <><div className='text-3xl font-bold'>Hooks Are Here:</div>
        <div className='text-xl'>1-UseState():
        <div>The Counter Is: {counter}</div>
         {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            setCounter(counter + 1);
         }} >
        Press To Increase The Counter
        </button> */}
        <br /> 
        <br /> 
<form>
        <input type="text" placeholder='Enter Your Name' onChange={(event) => {
            let newName = event.target.value;
            setName(newName);
        }} />
        </form>
        <div className="text-xl">Welcome {name} To Our Site</div>
        </div>
        
       
        </>


        )

}

export default Hooks;
