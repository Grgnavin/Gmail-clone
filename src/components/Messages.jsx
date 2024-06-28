import { useEffect, useState } from "react"
import Message from "./Message"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

function Messages() {
  const { emails, searchText } = useSelector(store => store.appSlice);
  const dispatch = useDispatch();
  const [tempEmails, setTempEmails] = useState(emails);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unSubscribe = onSnapshot(q , (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
      dispatch(setEmails(allEmails));
    });

    //cleanup
    return () => unSubscribe();
  },[]);

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return email?.searchText?.toLowerCase().includes(searchText?.toLowerCase()) ||
                email?.to?.toLowerCase().includes(searchText?.toLowerCase())  ||
                  email?.message?.toLowerCase().includes(searchText?.toLowerCase());  
    })
    setTempEmails(filteredEmail);
  },[searchText, emails])

  return (
    <div>
      {
        tempEmails && tempEmails?.map((email) => <Message email={email} /> )
      }
    </div>
  )
}

export default Messages