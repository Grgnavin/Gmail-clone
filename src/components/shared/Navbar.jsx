import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

function Navbar() {
    return (
        <div className="flex items-center justify-between mx-3 h-16">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded hover:bg-gray-100 cursor-pointer">
                        <GiHamburgerMenu size={'20px'} />
                    </div>
                    <img 
                        src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png" 
                        alt="gmail-logo" 
                        className="w-10"
                    />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>
            <div className="md:block hidden w-[40%]">
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                    <IoIosSearch size={'24px'} className="text-gray-700"/>
                    <input 
                        type="text"
                        className="rounded-full w-full bg-transparent outline-none px-1"
                        placeholder="Search Mail"
                    />
                </div>
            </div>
            <div className="md:block hidden">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiCircleQuestion size={'24px'}/>
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoSettingsOutline size={'24px'}/>
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <PiDotsNineBold size={'24px'}/>
                    </div>
                    <div className="cursor:pointer">
                        <Avatar 
                            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" 
                            size="40" 
                            round={true} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
