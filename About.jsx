import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our e-commerce platform, where quality meets affordability!
        </p>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733329.jpg?t=st=1733226291~exp=1733229891~hmac=f032670612c41873b7107259a9443aa921570b0c02c902e86b4eeba61fce9c71&w=1060"
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide high-quality products to our customers
              at competitive prices while ensuring a seamless shopping
              experience. We strive to make every customer's journey
              delightful, from browsing to doorstep delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Team Member */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="https://img.freepik.com/free-photo/man-holding-globe-trying-find-location_144627-61310.jpg?t=st=1733226475~exp=1733230075~hmac=dd050045b31d7dbaaa4dcfa775edfa3ee0279433f7a9cacd97642c31bfc99b3e&w=1060"
                alt={`Team Member ${item}`}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Team Member {item}
              </h3>
              <p className="text-gray-600 text-center">Role in the Company</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Achievement */}
            {[{ title: "10K+", subtitle: "Happy Customers" },
              { title: "5+", subtitle: "Years in Business" },
              { title: "1M+", subtitle: "Products Sold" },
              { title: "100+", subtitle: "Awards Won" }].map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold">{item.title}</h3>
                <p className="text-lg">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          Have questions? Feel free to reach out to us anytime.
        </p>
        <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
