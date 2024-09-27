
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css"

const ChatWithCoach = () => {

    const navigate = useNavigate() //navigate to page via react-router-dom "virtual dom"
    
    const[response, setResponse] = useState("") // set the LLM response state

    const[userInput, setUserInput] = useState("") // set the userInput state

    const[show, setShow] = useState(false) // Show LLM output
    
    const handleChange = (e) => { // set user input
      setUserInput(e.target.value)
    
    }
    const handleClick = () => { // Send use input to Api to generate response and set response state

      axios
       
      .get(`https://dynamic-llm-backend-c431e07e9db8.herokuapp.com/generate/${userInput}`)
      
      .then((response) => {

        setResponse(response.data); // Set the response from the API

        setShow(true); // Display the response

      })
      .catch((error) => {

        console.log("There was an error retrieving the data: ", error);

      });

    setUserInput(""); // Clear the input after the button is clicked

    }
    const handleGoBack = () => {
      navigate("/")

    }
    const SendMessage = () => { // Render LLM response
   
      return ( 
              <>
                  <p className="gemini-output">{response}</p> 
              </>
      )
    }
  return (
    <>
        
        <h1 className="main-title">Chat with Nutrition Coach Hercules</h1>
        <button className='btn-go-back' onClick={handleGoBack}>Go Back</button>
        <div className="main-flex-container">
                {show && <SendMessage />}
                <textarea className={"user-input"} onChange={handleChange} value={userInput}></textarea>
                <button onClick={handleClick}>Submit</button> 
        </div>
 
    </>

  )
}

export default ChatWithCoach