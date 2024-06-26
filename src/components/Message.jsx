import { MdCropSquare } from "react-icons/md"
import { RiStarLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const Message = () => {
    const navigate = useNavigate();
    const openMail = () => {
        navigate('/mail/123456');
    };

    return (
        <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow">
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-300">
                    <MdCropSquare className="w-5 h-5" />
                </div>
                <div className="flex-none text-gray-300">
                    <RiStarLine className="w-5 h-5" />
                </div>
            </div>
            <div className="flex-1 ml-4">
                <p className="text-gray-600 truncate inline-block max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque ut fugit. Quis laborum provident, eius molestias maiores porro dolor pariatur omnis placeat, animi et a adipisci in voluptatem quam!</p>
            </div>
            <div className="flex-none text-gray-400 text-sm">
                Time Aayega
            </div>
        </div>
    )
}

export default Message