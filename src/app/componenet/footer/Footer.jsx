
import React from 'react';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#2f5d4e] text-white text-center py-16 px-4">
            
            
            <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

        
            <p className="text-gray-200 max-w-xl mx-auto mb-8">
                Your personal shelf of meaningful connections. Browse, tend, and nurture 
                the relationships that matter most.
            </p>

            
            <h3 className="mb-4 font-semibold">Social Links</h3>
            <div className="flex justify-center gap-4 mb-12">
                
                <div className="bg-white text-black p-3 rounded-full cursor-pointer">
                    <FaYoutube />
                </div>

                <div className="bg-white text-black p-3 rounded-full cursor-pointer">
                    <FaFacebookF />
                </div>

                <div className="bg-white text-black p-3 rounded-full cursor-pointer">
                    <FaXTwitter />
                </div>

            </div>

            
            <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
                
                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="cursor-pointer hover:underline">Terms of Service</p>
                    <p className="cursor-pointer hover:underline">Cookies</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;