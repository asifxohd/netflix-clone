import React from "react"
import './nav.css'
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";



function Navbar() {

    return (
        <React.Fragment>
            <div className="navbar-main md:h-16 p-5 bg-transparent fixed z-10 flex flex-row">
                <div className="navbar-logo ml-12" >
                    <img className="netflix-logo md:h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
                </div>
                <div className="nav-elements pt-1 text-white flex flex-row ml-6" >
                    <div className="elements-nav-main ml-4  text-sm text-gray-300 hover:text-gray-400" > Home </div>
                    <div className="elements-nav-main ml-4  text-sm text-gray-300 hover:text-gray-400" > TV Shows </div>
                    <div className="elements-nav-main ml-4  text-sm text-gray-300 hover:text-gray-400" > Movies </div>
                    <div className="elements-nav-main ml-4  text-sm text-gray-300 hover:text-gray-400" > New & Popular </div>
                    <div className="elements-nav-main ml-4  text-sm text-gray-300 hover:text-gray-400" > My List </div>
                    <div className="elements-nav-main ml-4  text-sm text-gray-300 hover:text-gray-400" > Browse By Languages</div>
                </div>

                
                <div className="nav-end-items ml-96 pl-3 flex" >

                    <div className="ml-28 text-white mr-5">
                        <IoSearch size={26} />
                    </div>
                    <div className="text-white mr-5" > 
                        <FaRegBell size={26} />
                    </div>
                    <div className=" mr-5">
                        <img className="md:h-8" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
                    </div>

                </div>


            </div>

        </React.Fragment>
    );
}
export default Navbar