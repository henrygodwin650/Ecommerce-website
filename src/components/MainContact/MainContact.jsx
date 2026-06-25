// MainContact.jsx
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router';

const MainContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate sending message
    setIsSubmitted(true);

    setTimeout(() => {
      alert("✅ Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-gray-950 bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white dark:bg-gray-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white dark:bg-gray-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you today?"
                    rows="6"
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white dark:bg-gray-900 resize-y"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-4 rounded-2xl text-lg transition active:scale-[0.98]"
                >
                  {isSubmitted ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">support@iceshops.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">+234 813 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Address</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Benin City, Edo State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  We typically respond within <span className="font-semibold text-green-600">24 hours</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContact;