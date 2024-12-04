import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you! Reach out to us with your queries or feedback.
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions? Feel free to contact us through any of the channels below.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800">Address</h3>
            <p className="text-gray-600">123 E-commerce St, Shop City, TX 12345</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">support@ecommerce.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
