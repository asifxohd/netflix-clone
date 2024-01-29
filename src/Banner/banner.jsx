import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";


function Banner() {
    return (
        <React.Fragment>
            <div className="h-screen flex items-center justify-center">
                <div className="main-body-pic h-full relative w-full   items-center" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2703652.png")', backgroundSize: 'cover' }}>
                    <div className='text-white flex flex-col  mt-52 details '>
                        <div className='font-bold ml-24 text-5xl mt-36' >
                            Movie Name
                        </div>
                        <div className='ml-24 w-1/3 max-w-full mt-4 break-words' >
                            dghasiouagdhasdhgiouashgoashgoiaewhgoasdhgoiasdhdgfoiusadhgoasdhfgohadsoghasioughiudsahguadshgiduashgoiadshgioudsahdgoiahsgohsaoidghasgdhaosighjaosihgoaiushguiashguashgiuashgioduashgisahgdiouasdhiudshiudgshdgiuh
                        </div>
                        <div className='ml-24 flex flex-row' >
                            <div className="flex mt-2 ">
                                <button className="p-3 w-[100px] rounded bg-white text-black flex justify-center align-middle"><FaPlay size={20} />&nbsp;Play</button>
                                <button className="more-info w-[150px] p-3 bg-gray-400 ml-2 rounded   text-black flex justify-center align-middle"><IoMdInformationCircleOutline size={27} />&nbsp; More Info</button>
                            </div>
                        </div>
                        <div class="shade w-full h-16 p-10 absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-black"></div>

                    </div>
                </div>

            </div>


        </React.Fragment>


    );
}

export default Banner;
