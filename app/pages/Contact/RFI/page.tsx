"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from 'emailjs-com';

export default function RFI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_5wdr69q', // Replace with your EmailJS service ID
      'template_u4rlm5j', // Replace with your EmailJS template ID
      formData,
      'nuJ-9T2BI_Rxg44P8' // Replace with your EmailJS user ID
    )
    .then(() => {
      alert('Thank you! Your request has been submitted.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Error submitting form. Please try again.');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Request for Information/Quote
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Please fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Please provide any details regarding your request."
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
