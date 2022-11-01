import React,{useState,useEffect,useContext} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const ChatEngine = dynamic(()=>
import('react-chat-engine').then((module)=>module.ChatEngine)
)
const MessageFormSocial = dynamic(()=>
import('react-chat-engine').then((module)=>module.MessageFormSocial)
)
export default function Chats() {
  const {username,secret} = useContext(Context)
  const [showChat,setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  },);
  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if(!showChat) return <div/>

  return (
  <div className="background">
     <div className="shadow">
        <ChatEngine
          height="100vh"
          projectID="5fe37f41-65e7-4e80-a011-c03951062545"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
  </div>
  );
}
