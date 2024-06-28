import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Navbar() {
    const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch(); 
    const {user} = useSelector(store => store.appSlice)

    const signOutHandler =() => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    },[input])

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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
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
                    <div className='relative cursor-pointer'>
                    <Avatar onClick={() => setToggle(!toggle)} src={user?.photoURL} round={true} size="40px"/>
                    <AnimatePresence>
                    {
                        toggle && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.1 }}
                            className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                            <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                        </motion.div>
                        )
                    }
                    </AnimatePresence>
            </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
