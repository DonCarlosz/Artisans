import React from "react";
import { asset } from "../Images/asset";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-5 pt-12 mt-15">
      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={asset.logo} alt="Logo" className="h-10" />
            <img src={asset.logo3} alt="Alt Logo" className="h-10" />
          </div>
          <p className="text-sm leading-relaxed">
            Connecting you with skilled artisans across Nigeria. From home
            repairs to personal services, find trusted professionals in your
            area.
          </p>
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-2xl tracking-tighter md:text-3xl  font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-white">
                How it Works
              </Link>
            </li>
            <li>
              <Link to="/for-artisans" className="hover:text-white">
                For Artisans
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-2xl md:text-3xl tracking-tighter font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+234 800 123 4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>support@artisanconnect.ng</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm text-gray-400">
          <p className="flex items-center space-x-1">
            <Copyright className="w-4 h-4" />
            <span>2025 ArtisanConnect. All rights reserved.</span>
          </p>
          <p>Made in Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
