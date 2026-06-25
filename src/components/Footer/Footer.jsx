import React from 'react';
import ImgLogo from '../../assets/logo/logo.png';
import { 
  AiOutlineFacebook, 
  AiOutlineLinkedin, 
  AiOutlineTwitter, 
  AiOutlineWhatsApp 
} from 'react-icons/ai';
import { Link } from 'react-router';

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
              <li><Link to="#" className="hover:text-white transition">Source & Attract</Link></li>
              <li><Link to="#" className="hover:text-white transition">Evaluate & Collaborate</Link></li>
              <li><Link to="#" className="hover:text-white transition">Automate & Hire</Link></li>
              <li><Link to="#" className="hover:text-white transition">Onboard & Manage</Link></li>
              <li><Link to="#" className="hover:text-white transition">All Features</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Platform</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="#" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="#" className="hover:text-white transition">Why Ice-Shops</Link></li>
              <li><Link to="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white transition">Partners & Integrations</Link></li>
              <li><Link to="#" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="#" className="hover:text-white transition">Job Descriptions</Link></li>
              <li><Link to="#" className="hover:text-white transition">Hiring Templates</Link></li>
              <li><Link to="#" className="hover:text-white transition">Career Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase mb-6 text-green-400">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/contact" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition">Press</Link></li>
              <li><Link to="#" className="hover:text-white transition">Careers</Link></li>
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
            <Link to="#" className="hover:text-green-500 transition"><AiOutlineWhatsApp /></Link>
            <Link to="#" className="hover:text-green-500 transition"><AiOutlineLinkedin /></Link>
            <Link to="#" className="hover:text-green-500 transition"><AiOutlineFacebook /></Link>
            <Link to="#" className="hover:text-green-500 transition"><AiOutlineTwitter /></Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;