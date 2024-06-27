import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";

const SendMail = () => {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    });
    
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const submithandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setOpen(false)
    }

    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();
    return (
        <div className={`${open ? 'block': 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
                <h1>New message</h1>
                <div onClick={() => dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 size={'10px'}/>
                </div>
            </div>
            <form onSubmit={submithandler} className="flex flex-col p-3 gap-2">
                <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder="To" className="outline-none py-1" />
                <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder="Subject" className="outline-none py-1" />
                <textarea onChange={changeHandler} value={formData.message} name='message' cols={'30'} rows={'10'} 
                    className="outline-none py-1"></textarea>
                <button type="submit" className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium">Send</button>
            </form>
        </div>
    )
}

export default SendMail
