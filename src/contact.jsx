import React, { useRef, useState }  from "react";
import emailjs from "@emailjs/browser";
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const form = useRef();

  const [name,setName] = useState("")
  const [showModal, setShowModal] = React.useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_zxih52t",
        form.current,
        "XHNaBs2TnNSj455Jqs9sW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    form.current.reset();
  };

  const style = {
    sectionContainer: ` mt-12 mx-auto  flex flex-col h-[90vh] bg-gray-100  shadow-xl border relative`,
  }

  return (
      <><div className="space-y-4 text-center">
        <Fade top>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 mx-auto text-myOnce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
      </svg>
      <h3 className="text-2xl font-bold underline tracking-tight sm:text-3xl dark:text-gray-50">Contact Me</h3>
      <p className="text-gray-400 leading-relaxed">
        You can send your message and get response as soon as possible.

      </p>
      </Fade>
    </div><div className="mt-5">
        <form
          onSubmit={sendEmail}
          className="items-center justify-center sm:flex"
        >
          <Fade right>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="text-gray-500  p-3 rounded-md border outline-none focus:border-indigo-600"
            onChange={(event) => {
              let newName = event.target.value;
              setName(newName);
            } } />
            </Fade>
          <br />
          <br />
          <Fade left>

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="text-gray-500  p-3 rounded-md border outline-none focus:border-indigo-600" />
            </Fade>
          <br />
          <br />
          <Fade right>

          <input
            name="text"
            type="text"
            placeholder="Enter Your Message"
            className="text-gray-500  p-3 rounded-md border outline-none focus:border-indigo-600" />
                        </Fade>

          <br />
          <br />
          <Fade>

          <button
            className=" bg-myOnce text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Send Message
          </button>
          </Fade>

          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Modal Message
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                     Thanks For Sending Your Message <span className="font-bold text-myOnce">{name}</span>! 
                     Be Sure That I Will Response As Soon As I Can.
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </form>
        <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
          Hello {name}! Welcome To My Site. Feel Free To Ask Or Write whatever You Want!
        </p>
      </div></>


  );
};

export default Contact;
