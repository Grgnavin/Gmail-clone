import { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import SendMail from './SendMail'

function SideBar() {
    const [open, setOpen] =useState(false);


    const sideBarIcons = [
    {
        icon: <LuPencil size={'20px'}/>,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={'20px'}/>,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'20px'}/>,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={'20px'}/>,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'20px'}/>,
        text: "Draft"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'20px'}/>,
        text: "More"
    },
];

    return (
        <div className='w-[20%]'>
            <div className='p-3'>
                <button onClick={()=> setOpen()} className='flex items-center gap-3 p-4 rounded-2xl hover:shadow-lg bg-[#C2E7FF]'>
                    <LuPencil size={'20px'}/>
                    Compose
                </button>
            </div>
            <div className='text-gray-500'> 
                    { sideBarIcons.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2'>
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    }) }
                </div>
        </div>
    )
}

export default SideBar