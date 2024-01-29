import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




function Footer() {
    return (
        <React.Fragment>
            <div className="px-56 h-40" >
                <div className="flex">
                    <div className="social-media-icons space-x-5 text-white flex" >
                        <FaFacebookF size={25} />
                        <FaInstagram size={25} /> 
                        <FaTwitter size={25} />
                        <FaYoutube size={25} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <div className="text-xs mt-4 text-gray-400">Audio Description</div>
                        <div className="text-xs mt-4 text-gray-400">Investor Relations</div>
                        <div className="text-xs mt-4 text-gray-400 ">Legal Notices</div>
                        <div className="mt-4">
                            <button className=" mt-4bg-transparent hover:text-white text-gray-500 font-semibold text-xs py-1 px-2 border border-gray-500">
                                Service Code
                            </button>
                        </div>
                        <div className=" mt-4">&copy; 1997-2024 Netflix, Inc.</div>
                    </div>

                    <div className="text-xs text-gray-400 ">
                        <div className="mt-4" >Help Center</div>
                        <div className="mt-4" >Jobs</div>
                        <div className="mt-4" >Cookie Preferences</div>
                    </div>

                    <div className="text-xs text-gray-400 ">
                        <div className="mt-4" >Gift Cards</div>
                        <div className="mt-4" >Terms Of Use</div>
                        <div className="mt-4" >Corporate Information</div>
                    </div>

                    <div className="text-xs text-gray-400 ">
                        <div className="mt-4" >Media Center</div>
                        <div className="mt-4" >Privacy</div>
                        <div className="mt-4" >Contact Us</div>
                    </div>
                </div>


            </div>
        </React.Fragment>
    );
}
export default Footer