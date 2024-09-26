import './index.css';
import { useState } from "react";
import axios from "axios";


const ChatWithCoach = () => {
    
    const[response, setResponse] = useState("")
    const[userInput, setUserInput] = useState("")

    const[show, setShow] = useState(false)
    
    const handleChange = (e) => {
      setUserInput(e.target.value)
    
    }
    const handleClick = (e) => {
      
      axios
      .get(`http://127.0.0.1:8000/generate/${userInput}`)
      .then((response) => {
        setResponse(response.data); // Set the response from the API
        setShow(true); // Display the response
      })
      .catch((error) => {
        console.log("There was an error retrieving the data: ", error);
      });

    setUserInput(""); // Clear the input after the button is clicked

    }
    const SendMessage = () => {
   
      return (
         
        <>
        <p className="gemini-output">{response}</p>
        
        </>
      )
    }
  return (
    <>

    <h1 className="main-title">Chat with Nutrition Coach Athena</h1>
    <div className="main-flex-container">
    {show && <SendMessage />}
    <textarea className={"user-input"} onChange={handleChange} value={userInput}></textarea>
    <button onClick={handleClick}>Submit</button>
   

   </div>
 
    </>

  )
}

export default ChatWithCoach