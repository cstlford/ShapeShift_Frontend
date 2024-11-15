
import {useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
import Markdown from 'react-markdown'
import SideNavbarComponent from "../Dashboard/SideNavbarComponent";
import NavbarComponent from "../Dashboard/NavbarComponent";
// import.meta.env.VITE_YOUR_ENV_VARIABLE




const ChatWithCoach = () => {
    
  interface Message{
    sender: string;
    text: string;
  }
  
    const navigate = useNavigate() //navigate to page via react-router-dom "virtual dom"
    const[userInput, setUserInput] = useState("") // set the userInput state
    const [messages, setMessages] = useState<Message[]>([]);
    

    const[show, setShow] = useState(false) // Show LLM output

   
    
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {  // Add type to event parameter
      setUserInput(e.target.value)
      
    }
    // const handleMealClick = () => { // navigates to generate sample meal plan when users clicks the button
    //   navigate("/generate-meal-plan")
    // }

   
    
  

      const handleClick = async () => {
        setUserInput("");
        try {
          const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({"message": userInput}),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const ai_response = await response.json();
  
          setMessages((prev) => [...prev, {sender: "You", text: userInput}])
          setMessages((prev) => [...prev, {sender:"Hercules", text:  ai_response.message.trim()  } ])
          

          setShow(true)
          
          
    
       
        } catch (error) {
          console.error("Error fetching meal plan:", error);
          
        }
      
      };
    
    const handleGoBack = () => {
      navigate("/dashboard")

    }
 
    const SendMessage = () => {
      return (
          <>
              <div className="gemini-output">
                  {messages.map((data, index) => (
                      <div id="messages" key={index}> {/* Direct div to avoid extra <p> */}
                          <strong>{data.sender}:</strong>
                          <Markdown>{data.text}</Markdown>
                      </div>
                  ))}
              </div>
          </>
      );
  };

  const handleDeleteChat = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/delete-chat-history", {
        method: "DELETE", // If you are using POST to clear chat, keep it as POST
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensures the session or cookie is sent with the request
        // No need for body since it's just clearing the chat
      });
    
      // Handle the response after the request is successful
      if (response.ok) {
        console.log("Chat history cleared successfully.");
        // Optionally, you can update the UI to reflect the cleared chat
      } else {
        console.log("Failed to clear chat history.");
      }
    } catch (error) {
      console.error("Error:", error);
    }

  }
  return (
    <>
     <NavbarComponent />
    <SideNavbarComponent />
    <div id="main-container">
      <div id="header-buttons">
        
        <button id="btn-delete-chat" onClick={handleDeleteChat}>Delete All Chat History</button>
      </div>

      <h1 id="main-title">Chat with Nutrition Coach Hercules</h1>

      <div id="chat-container">
        {show && <SendMessage />}
      </div>

      <div id="input-container">
        <textarea
          id="userInput"
          className="user-input"
          onChange={handleChange}
          value={userInput}
          placeholder="Type your message here..."
        ></textarea>

        <button id="btn-chat" onClick={handleClick}>Submit</button>
      </div>
    </div>
  </>

  )
}

export default ChatWithCoach