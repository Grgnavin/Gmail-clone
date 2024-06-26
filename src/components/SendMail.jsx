import { RxCross2 } from "react-icons/rx"

const SendMail = () => {
    return (
        <div className='bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md'>
            <div className="flex px-3 bg-[#F2F6Fc] justify-between rounded-t-md">
                <h1>New message</h1>
                <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 size={'20px'}/>
                </div>
            </div>
            <form action="" className="flex flex-col p-3 gap-2">
                <input type="text" placeholder="To" className="outline-none py-1" />
                <input type="text" placeholder="Subject" className="outline-none py-1" />
                <textarea name='message' cols={'30'} rows={'10'} 
                    className="outline-none py-1"></textarea>
                <button type="submit" className="rounded-full w-fit px-4 text-white font-medium bg-[0B57D0]">Send</button>
            </form>
        </div>
    )
}

export default SendMail
