import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 bg-white flex justify-center items-center">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-orange-950 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 bg-orange-950 lg:-mt-96 lg:py-12 lg:px-8 py-8 px-4">
        <div className="container mx-auto text-white">
          <h1 className="font-bold uppercase text-4xl mb-4">Drop in our office</h1>
          <p className="text-gray-400 mb-8">
            Our team is always ready to help you. Our office is open from 8:00 am to 5:00 pm, every working day except during public holidays.
          </p>
          <div className="flex my-4">
            <div className="flex flex-col pr-2">
              <i className="fas fa-map-marker-alt pt-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Main Office</h2>
              <p className="text-gray-400">Arizona Plaza. Next to Kings Premier Hotel Mlolongo</p>
              <p className="text-gray-400">Rubaga Road, Kampala-Uganda</p>
            </div>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col pr-2">
              <i className="fas fa-phone-alt pt-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">Tel: 0718528410</p>
              <p className="text-gray-400">Email: sanhoequipment@gmail.com</p>
            </div>
          </div>
          <div className="flex my-4">
            <a
              href="https://www.facebook.com/ENLIGHTENEERING/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
            >
              <i className="fab fa-facebook-f text-blue-900" />
            </a>
            <a
              href="https://www.linkedin.com/company/enlighteneering-inc-"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
            >
              <i className="fab fa-linkedin-in text-blue-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
