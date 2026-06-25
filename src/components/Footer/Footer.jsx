import React from 'react';
import ImgLogo from '../../assets/logo/logo.png';
import { 
  AiOutlineFacebook, 
  AiOutlineLinkedin, 
  AiOutlineTwitter, 
  AiOutlineWhatsApp 
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-14">
          <img 
            src={ImgLogo} 
            alt="Ice-Shops Logo" 
            width={50} 
            className="inline" 
          />
          <span className="text-3xl italic font-semibold tracking-tight">
            ICE-SHOPS
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Product</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Source & Attract</a></li>
              <li><a href="#" className="hover:text-white transition">Evaluate & Collaborate</a></li>
              <li><a href="#" className="hover:text-white transition">Automate & Hire</a></li>
              <li><a href="#" className="hover:text-white transition">Onboard & Manage</a></li>
              <li><a href="#" className="hover:text-white transition">All Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Platform</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Why Ice-Shops</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Partners & Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Job Descriptions</a></li>
              <li><a href="#" className="hover:text-white transition">Hiring Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Career Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/contact" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-gray-800 gap-6">
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ice-Shops. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">
            <a href="#" className="hover:text-green-500 transition"><AiOutlineWhatsApp /></a>
            <a href="#" className="hover:text-green-500 transition"><AiOutlineLinkedin /></a>
            <a href="#" className="hover:text-green-500 transition"><AiOutlineFacebook /></a>
            <a href="#" className="hover:text-green-500 transition"><AiOutlineTwitter /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;