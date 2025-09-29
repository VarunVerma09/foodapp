import React from "react";
import Nav from "../components/Nav";

const ContactUs = () => {
  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center  ">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-500 mt-2">
            Have questions about your order or want to give us feedback?  
            We’d love to hear from you!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">📍 Address</h2>
              <p className="text-gray-500">Noida Sector 62</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">📞 Phone</h2>
              <p className="text-gray-500">+91 7830473709</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">✉️ Email</h2>
              <p className="text-gray-500">umangsoni409@gmail.com</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};


export default ContactUs;
